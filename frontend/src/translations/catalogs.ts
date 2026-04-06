import en from './en';
import fr from './fr';

export { en, fr };

export const catalogs = {
  fr,
  en,
} as const;

export type Catalog = typeof fr;
export type Messages = Catalog['messages'];
export type Locale = keyof typeof catalogs;
export type LocaleOption = {
  value: Locale;
  label: string;
};

export const localeOptions: LocaleOption[] = (Object.values(catalogs) as Catalog[]).map((catalog) => ({
  value: catalog.locale as Locale,
  label: catalog.label,
}));

export function isLocale(value: string | undefined): value is Locale {
  return value === 'fr' || value === 'en';
}
