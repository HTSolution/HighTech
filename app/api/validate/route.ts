import { NextResponse } from 'next/server';
import dns from 'dns';
import net from 'net';

// Helper per risolvere MX con Promise
const resolveMx = (domain: string): Promise<dns.MxRecord[]> => {
  return new Promise((resolve, reject) => {
    dns.resolveMx(domain, (err, addresses) => {
      if (err) reject(err);
      else resolve(addresses);
    });
  });
};

const cleanStr = (val: any) => {
  if (!val || val === 'undefined') return '';
  return String(val).trim();
};

const validateName = (val: any) => {
  const v = cleanStr(val);
  if (v.length < 2) return { valid: false, reason: 'too_short' };
  if (!/^[a-zA-ZÀ-ÿ\s'\-]+$/.test(v)) return { valid: false, reason: 'invalid_chars' };
  return { valid: true };
};

const validateEmail = async (email: string): Promise<any> => {
  const v = cleanStr(email);
  if (!v) return { valid: false, reason: 'empty' };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return { valid: false, reason: 'invalid_format' };

  const domain = v.split('@')[1];

  let mxRecords;
  try {
    mxRecords = await resolveMx(domain);
    mxRecords.sort((a, b) => a.priority - b.priority);
  } catch {
    return { valid: false, reason: 'mx_not_found' };
  }

  if (!mxRecords.length) return { valid: false, reason: 'no_mx_records' };
  const mxHost = mxRecords[0].exchange;

  return new Promise((resolve) => {
    const socket = new net.Socket();
    const timeout = 8000;
    let step = 0;
    let result: any = null;

    const cleanup = () => { socket.destroy(); };
    socket.setTimeout(timeout);
    socket.connect(25, mxHost);

    socket.on('data', (data) => {
      const response = data.toString();
      if (step === 0 && response.startsWith('220')) {
        step = 1;
        socket.write(`EHLO validator.local\r\n`);
      } else if (step === 1 && response.includes('250')) {
        step = 2;
        socket.write(`MAIL FROM:<verify@validator.local>\r\n`);
      } else if (step === 2 && response.includes('250')) {
        step = 3;
        socket.write(`RCPT TO:<${v}>\r\n`);
      } else if (step === 3) {
        if (response.startsWith('250')) result = { valid: true };
        else if (response.match(/^(550|551|552|553|450|421)/)) result = { valid: false, reason: 'mailbox_not_found' };
        else result = { valid: null, reason: 'inconclusive' };
        socket.write(`QUIT\r\n`);
        cleanup();
        resolve(result);
      }
    });

    socket.on('timeout', () => { cleanup(); resolve({ valid: null, reason: 'timeout' }); });
    socket.on('error', (err) => { cleanup(); resolve({ valid: null, reason: 'connection_error', detail: err.message }); });
    socket.on('close', () => { if (result === null) resolve({ valid: null, reason: 'closed_unexpectedly' }); });
  });
};

// --- NEXT.JS POST HANDLER ---
export async function POST(req: Request) {
  try {
    const { first_name, last_name, email } = await req.json();

    const [firstNameResult, lastNameResult, emailResult] = await Promise.all([
      Promise.resolve(validateName(first_name)),
      Promise.resolve(validateName(last_name)),
      validateEmail(email),
    ]);

    // Logica di tolleranza: se il controllo SMTP fallisce per timeout/connessione, 
    // ma il formato è corretto, lo consideriamo "buono" per non bloccare utenti validi
    const isEmailValid = emailResult.valid === true || (emailResult.valid === null && emailResult.reason !== 'empty');

    const allValid = firstNameResult.valid && lastNameResult.valid && isEmailValid;

    return NextResponse.json({
      first_name: { value: cleanStr(first_name), ...firstNameResult },
      last_name: { value: cleanStr(last_name), ...lastNameResult },
      email: { value: cleanStr(email), ...emailResult },
      all_valid: allValid,
    });
  } catch (error) {
    return NextResponse.json({ all_valid: false, error: 'Invalid request' }, { status: 400 });
  }
}