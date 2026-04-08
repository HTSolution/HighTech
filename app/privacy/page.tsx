import LegalLayout from '@/components/layout/LegalLayout';
import { PRIVACY_CONTENT } from '@/constants/legal';

export const metadata = { title: "Privacy Policy | HighTech Solution" };

export default function PrivacyPage() {
  return <LegalLayout {...PRIVACY_CONTENT} />;
}
