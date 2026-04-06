export type LinkAction = {
  href: string;
  label: string;
};

export type HeroStat = {
  value: string;
  label: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: LinkAction;
  secondaryAction: LinkAction;
  highlights: string[];
  asideTitle: string;
  asideDescription: string;
  stats: HeroStat[];
};

export type SectionContent = {
  title: string;
  description: string;
};

export type EyebrowSectionContent = SectionContent & {
  eyebrow: string;
};

export type CardItem = {
  title: string;
  description: string;
};

export type CardCollection = EyebrowSectionContent & {
  items: CardItem[];
};

export type IntroContent = EyebrowSectionContent & {
  cardTitle: string;
  cardBody: string;
  quote: string;
  points: string[];
};
