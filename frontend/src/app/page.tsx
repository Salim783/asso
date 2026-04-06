import HomePage from './HomePage';
import { getCurrentLocaleData } from '@/translations/server';

export default async function Page() {
  const { messages } = await getCurrentLocaleData();

  return (
    <HomePage
      hero={messages.home.hero}
      intro={messages.home.intro}
      priorities={messages.home.priorities}
      actions={messages.home.actions}
      closing={messages.home.closing}
    />
  );
}
