import LegalLayout from '@/components/layout/LegalLayout';
import { COOKIE_CONTENT } from '@/constants/legal';

export const metadata = { title: "Cookie Policy | HT Solution" };

export default function CookiePage() {
  return <LegalLayout {...COOKIE_CONTENT} />;
}