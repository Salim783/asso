import { SxProps, Theme } from '@mui/material/styles';

export const francePageClasses = {
  closingCard: 'FrancePage-closingCard',
} as const;

export const francePageStyles: Record<(typeof francePageClasses)[keyof typeof francePageClasses], SxProps<Theme>> = {
  [francePageClasses.closingCard]: {
    p: { xs: 3.5, md: 5 },
    borderRadius: 4,
    border: '1px solid',
    borderColor: 'divider',
    background: 'linear-gradient(135deg, rgba(255,253,248,1) 0%, rgba(244,227,212,0.68) 40%, rgba(217,236,232,0.48) 100%)',
  },
};

export const francePageClosingTitleStyles: SxProps<Theme> = {
  fontSize: { xs: '2rem', md: '2.8rem' },
};

export const francePageClosingBodyStyles: SxProps<Theme> = {
  lineHeight: 1.9,
};
