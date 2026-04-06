import ContactPage from './ContactPage';
import { getCurrentLocaleData } from '@/translations/server';

export default async function Page() {
  const { messages } = await getCurrentLocaleData();

  return (
    <ContactPage
      section={messages.contact.section}
      infos={messages.contact.infos}
      commitments={messages.contact.commitments}
      supportTitle={messages.contact.supportTitle}
      supportDescription={messages.contact.supportDescription}
      mapTitle={messages.contact.mapTitle}
    />
  );
}
