import MoroccoPage from './MoroccoPage';
import { getCurrentLocaleData } from '@/translations/server';

export default async function Page() {
  const { messages } = await getCurrentLocaleData();

  return (
    <MoroccoPage
      hero={messages.morocco.hero}
      section={messages.morocco.section}
      actions={messages.morocco.actions}
      closing={messages.morocco.closing}
    />
  );
}
