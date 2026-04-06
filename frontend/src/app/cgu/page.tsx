import TermsPage from './TermsPage';
import { getCurrentLocaleData } from '@/translations/server';

export const metadata = {
  title: 'CGU | MIA',
};

export default async function Page() {
  const { messages } = await getCurrentLocaleData();

  return (
    <TermsPage
      section={messages.terms.section}
      cardTitle={messages.terms.cardTitle}
      cardDescription={messages.terms.cardDescription}
    />
  );
}
