import { SxProps, Theme } from '@mui/material/styles';

export const homePageClasses = {
  storyCard: 'HomePage-storyCard',
  quote: 'HomePage-quote',
  pointCard: 'HomePage-pointCard',
  closingCard: 'HomePage-closingCard',
} as const;

export const homePageStyles: Record<(typeof homePageClasses)[keyof typeof homePageClasses], SxProps<Theme>> = {
  [homePageClasses.storyCard]: {
    height: '100%',
    p: { xs: 3, md: 4.5 },
    borderRadius: 4,
    border: '1px solid',
    borderColor: 'divider',
    background: 'linear-gradient(180deg, rgba(255,253,248,1) 0%, rgba(217,236,232,0.42) 100%)',
  },
  [homePageClasses.quote]: {
    width: '100%',
    p: 3,
    borderRadius: 3,
    backgroundColor: 'rgba(11,52,47,0.92)',
    color: 'primary.contrastText',
  },
  [homePageClasses.pointCard]: {
    flex: 1,
    p: 3,
    borderRadius: 3,
    border: '1px solid',
    borderColor: 'divider',
  },
  [homePageClasses.closingCard]: {
    mt: 1,
    p: { xs: 3.5, md: 5 },
    borderRadius: 4,
    border: '1px solid',
    borderColor: 'divider',
    background: 'linear-gradient(135deg, rgba(255,253,248,1) 0%, rgba(244,227,212,0.68) 46%, rgba(217,236,232,0.48) 100%)',
  },
};

export const homePageStoryTitleStyles: SxProps<Theme> = {
  fontSize: { xs: '2rem', md: '2.8rem' },
};

export const homePageStoryBodyStyles: SxProps<Theme> = {
  lineHeight: 1.9,
  maxWidth: 780,
};

export const homePageQuoteTitleStyles: SxProps<Theme> = {
  color: 'inherit',
  fontSize: { xs: '1.9rem', md: '2.45rem' },
};

export const homePageClosingTitleStyles: SxProps<Theme> = {
  fontSize: { xs: '2rem', md: '2.9rem' },
};

export const homePageLongTextStyles: SxProps<Theme> = {
  lineHeight: 1.9,
};
