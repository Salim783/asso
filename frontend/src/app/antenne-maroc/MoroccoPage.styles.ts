import { SxProps, Theme } from '@mui/material/styles';

export const moroccoPageClasses = {
  card: 'MoroccoPage-card',
  imageWrap: 'MoroccoPage-imageWrap',
  closingCard: 'MoroccoPage-closingCard',
} as const;

export const moroccoPageStyles: Record<(typeof moroccoPageClasses)[keyof typeof moroccoPageClasses], SxProps<Theme>> = {
  [moroccoPageClasses.card]: {
    height: '100%',
    overflow: 'hidden',
    borderRadius: 4,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
  },
  [moroccoPageClasses.imageWrap]: {
    position: 'relative',
    minHeight: 280,
  },
  [moroccoPageClasses.closingCard]: {
    p: { xs: 3.5, md: 5 },
    borderRadius: 4,
    border: '1px solid',
    borderColor: 'divider',
    background: 'linear-gradient(135deg, rgba(255,253,248,1) 0%, rgba(217,236,232,0.44) 40%, rgba(244,227,212,0.68) 100%)',
  },
};

export const moroccoPageCardTitleStyles: SxProps<Theme> = {
  fontSize: { xs: '1.8rem', md: '2.35rem' },
};

export const moroccoPageBodyStyles: SxProps<Theme> = {
  lineHeight: 1.85,
};

export const moroccoPageClosingTitleStyles: SxProps<Theme> = {
  fontSize: { xs: '2rem', md: '2.8rem' },
};

export const moroccoPageClosingBodyStyles: SxProps<Theme> = {
  lineHeight: 1.9,
};
