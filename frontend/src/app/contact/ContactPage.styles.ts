import { SxProps, Theme } from '@mui/material/styles';

export const contactPageClasses = {
  introCard: 'ContactPage-introCard',
  mapCard: 'ContactPage-mapCard',
  commitmentCard: 'ContactPage-commitmentCard',
} as const;

export const contactPageStyles: Record<(typeof contactPageClasses)[keyof typeof contactPageClasses], SxProps<Theme>> = {
  [contactPageClasses.introCard]: {
    p: { xs: 3.5, md: 4 },
    borderRadius: 4,
    border: '1px solid',
    borderColor: 'divider',
    background: 'linear-gradient(180deg, rgba(255,253,248,1) 0%, rgba(217,236,232,0.48) 100%)',
  },
  [contactPageClasses.mapCard]: {
    p: 2,
    borderRadius: 4,
    border: '1px solid',
    borderColor: 'divider',
    overflow: 'hidden',
    height: '100%',
    backgroundColor: 'background.paper',
  },
  [contactPageClasses.commitmentCard]: {
    height: '100%',
    p: 3.25,
    borderRadius: 3,
    border: '1px solid',
    borderColor: 'divider',
  },
};

export const contactPageTitleStyles: SxProps<Theme> = {
  fontSize: { xs: '2rem', md: '2.8rem' },
};

export const contactPageBodyStyles: SxProps<Theme> = {
  lineHeight: 1.9,
};

export const contactPageIframeStyles: SxProps<Theme> = {
  width: '100%',
  minHeight: { xs: 340, md: '100%' },
  height: { xs: 340, md: '100%' },
  border: 0,
  borderRadius: 2,
};
