import { SxProps, Theme } from '@mui/material/styles';

export const legalMentionsPageClasses = {
  card: 'LegalMentionsPage-card',
} as const;

export const legalMentionsPageStyles: Record<(typeof legalMentionsPageClasses)[keyof typeof legalMentionsPageClasses], SxProps<Theme>> = {
  [legalMentionsPageClasses.card]: {
    p: { xs: 3.5, md: 5 },
    borderRadius: 4,
    border: '1px solid',
    borderColor: 'divider',
    background: 'linear-gradient(135deg, rgba(255,253,248,1) 0%, rgba(217,236,232,0.42) 100%)',
    maxWidth: 760,
    mx: 'auto',
  },
};

export const legalMentionsPageTitleStyles: SxProps<Theme> = {
  fontSize: { xs: '2rem', md: '2.8rem' },
};

export const legalMentionsPageBodyStyles: SxProps<Theme> = {
  lineHeight: 1.9,
};
