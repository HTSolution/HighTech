import LegalLayout from '@/components/layout/LegalLayout';
import { PRIVACY_CONTENT } from '@/constants/legal';

export default function PrivacyPage() {
  return <LegalLayout data={PRIVACY_CONTENT} />;
}