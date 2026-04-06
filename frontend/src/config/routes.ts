export const HOME_SECTION_IDS = {
  whoWeAre: 'who-we-are',
  mission: 'mission',
  services: 'services',
} as const;

export const ROUTES = {
  home: '/',
  contact: '/contact',
  franceBranch: '/antenne-france',
  moroccoBranch: '/antenne-maroc',
  legalMentions: '/mentions-legales',
  terms: '/cgu',
} as const;

export const HOME_SECTION_ROUTES = {
  whoWeAre: `${ROUTES.home}#${HOME_SECTION_IDS.whoWeAre}`,
  services: `${ROUTES.home}#${HOME_SECTION_IDS.services}`,
} as const;
