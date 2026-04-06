import { SxProps, Theme } from '@mui/material/styles';

export const termsPageClasses = {
  card: 'TermsPage-card',
} as const;

export const termsPageStyles: Record<(typeof termsPageClasses)[keyof typeof termsPageClasses], SxProps<Theme>> = {
  [termsPageClasses.card]: {
    p: { xs: 3.5, md: 5 },
    borderRadius: 4,
    border: '1px solid',
    borderColor: 'divider',
    background: 'linear-gradient(135deg, rgba(255,253,248,1) 0%, rgba(244,227,212,0.62) 100%)',
    maxWidth: 760,
    mx: 'auto',
  },
};

export const termsPageTitleStyles: SxProps<Theme> = {
  fontSize: { xs: '2rem', md: '2.8rem' },
};

export const termsPageBodyStyles: SxProps<Theme> = {
  lineHeight: 1.9,
};
