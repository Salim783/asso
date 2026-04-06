import { cookies } from 'next/headers';
import { catalogs, fr, isLocale, localeOptions, type Locale, type Messages } from './catalogs';
import { LOCALE_COOKIE_NAME } from './constants';

export async function getCurrentLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const locale = cookieStore.get(LOCALE_COOKIE_NAME)?.value;

  return isLocale(locale) ? locale : (fr.locale as Locale);
}

export function getMessages(locale: Locale): Messages {
  return (catalogs[locale] ?? fr).messages;
}

export async function getCurrentLocaleData() {
  const locale = await getCurrentLocale();

  return {
    locale,
    locales: localeOptions,
    messages: getMessages(locale),
  };
}
