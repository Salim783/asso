import LegalMentionsPage from './LegalMentionsPage';
import { getCurrentLocaleData } from '@/translations/server';

export const metadata = {
  title: 'Mentions legales | MIA',
};

export default async function Page() {
  const { messages } = await getCurrentLocaleData();

  return (
    <LegalMentionsPage
      section={messages.legalMentions.section}
      cardTitle={messages.legalMentions.cardTitle}
      cardDescription={messages.legalMentions.cardDescription}
    />
  );
}
