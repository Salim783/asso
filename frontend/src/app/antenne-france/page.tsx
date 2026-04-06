import FrancePage from './FrancePage';
import { getCurrentLocaleData } from '@/translations/server';

export default async function Page() {
  const { messages } = await getCurrentLocaleData();

  return (
    <FrancePage
      hero={messages.france.hero}
      section={messages.france.section}
      actions={messages.france.actions}
      closing={messages.france.closing}
    />
  );
}
