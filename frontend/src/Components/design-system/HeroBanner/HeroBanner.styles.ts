import { SxProps, Theme } from '@mui/material/styles';

export const heroBannerClasses = {
  root: 'HeroBanner-root',
  panel: 'HeroBanner-panel',
  statsCard: 'HeroBanner-statsCard',
} as const;

export const heroBannerRootStyles: SxProps<Theme> = {
  pt: { xs: 4, md: 6 },
  pb: { xs: 2, md: 4 },
};

export const heroBannerPanelStyles: SxProps<Theme> = {
  position: 'relative',
  overflow: 'hidden',
  px: { xs: 3, md: 5 },
  py: { xs: 4, md: 5 },
  borderRadius: { xs: 4, md: 5 },
  border: '1px solid',
  borderColor: 'divider',
  background:
    'linear-gradient(135deg, rgba(11,52,47,0.98) 0%, rgba(16,74,67,0.98) 52%, rgba(133,87,52,0.96) 100%)',
  color: 'primary.contrastText',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '36%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0))',
    clipPath: 'polygon(28% 0, 100% 0, 100% 100%, 0 100%)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1,
    background: 'linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.45), rgba(255,255,255,0))',
  },
};

export const heroBannerGridStyles: SxProps<Theme> = {
  position: 'relative',
  zIndex: 1,
  alignItems: 'stretch',
};

export const heroBannerTitleStyles: SxProps<Theme> = {
  fontSize: { xs: '3rem', md: '5.4rem' },
  maxWidth: 760,
};

export const heroBannerDescriptionStyles: SxProps<Theme> = {
  fontSize: { xs: '1rem', md: '1.15rem' },
  lineHeight: 1.8,
  color: 'rgba(248,243,234,0.84)',
  maxWidth: 720,
};

export const heroBannerChipStyles: SxProps<Theme> = {
  borderRadius: 1.5,
  backgroundColor: 'rgba(255,255,255,0.08)',
  color: 'inherit',
  border: '1px solid rgba(255,255,255,0.16)',
};

export const heroBannerPrimaryActionStyles = {
  backgroundColor: '#fffdf8',
  color: '#1b211f !important',
  '&:visited': {
    color: '#1b211f !important',
  },
  '&:hover': {
    backgroundColor: '#fffdf8',
    color: '#1b211f !important',
  },
  '&:active': {
    backgroundColor: '#fffdf8',
    color: '#1b211f !important',
  },
  '&.MuiButton-containedPrimary': {
    backgroundColor: '#fffdf8',
    color: '#1b211f !important',
  },
  '&.MuiButton-containedPrimary:hover': {
    backgroundColor: '#fffdf8',
    color: '#1b211f !important',
  },
  '&.MuiButton-containedPrimary:active': {
    backgroundColor: '#fffdf8',
    color: '#1b211f !important',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#fffdf8',
    color: '#1b211f !important',
  },
} satisfies SxProps<Theme>;

export const heroBannerSecondaryActionStyles = {
  color: '#1b211f !important',
  borderColor: 'rgba(255,255,255,0.35)',
  backgroundColor: 'rgba(255,253,248,0.92)',
  '&:visited': {
    color: '#1b211f !important',
  },
  '&:hover': {
    color: '#1b211f !important',
    borderColor: 'rgba(255,255,255,0.35)',
    backgroundColor: 'rgba(255,253,248,0.92)',
  },
  '&:active': {
    color: '#1b211f !important',
    borderColor: 'rgba(255,255,255,0.35)',
    backgroundColor: 'rgba(255,253,248,0.92)',
  },
  '&.Mui-focusVisible': {
    color: '#1b211f !important',
    borderColor: 'rgba(255,255,255,0.35)',
    backgroundColor: 'rgba(255,253,248,0.92)',
  },
} satisfies SxProps<Theme>;

export const heroBannerSelectedActionStyles = {
  '&.Mui-selected, &[aria-current="page"], &[data-selected="true"]': {
    color: 'text.primary',
    backgroundColor: 'background.paper',
    borderColor: 'background.paper',
  },
  '&.Mui-selected:hover, &[aria-current="page"]:hover, &[data-selected="true"]:hover': {
    color: 'text.primary',
    backgroundColor: 'background.paper',
    borderColor: 'background.paper',
  },
  '&.Mui-selected:visited, &[aria-current="page"]:visited, &[data-selected="true"]:visited': {
    color: 'text.primary',
  },
} satisfies SxProps<Theme>;

export const heroBannerAsideStyles: SxProps<Theme> = {
  p: 3,
  borderRadius: 4,
  backgroundColor: 'rgba(255,255,255,0.07)',
  border: '1px solid rgba(255,255,255,0.12)',
  backdropFilter: 'blur(10px)',
};

export const heroBannerAsideTitleStyles: SxProps<Theme> = {
  color: 'inherit',
  fontSize: { xs: '2rem', md: '2.45rem' },
};

export const heroBannerAsideDescriptionStyles: SxProps<Theme> = {
  color: 'rgba(248,243,234,0.8)',
  lineHeight: 1.7,
};

export const heroBannerStatsCardStyles: SxProps<Theme> = {
  height: '100%',
  p: 2.5,
  borderRadius: 3,
  backgroundColor: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.12)',
  backdropFilter: 'blur(10px)',
};

export const heroBannerStatsValueStyles: SxProps<Theme> = {
  color: 'inherit',
  fontSize: { xs: '2rem', md: '2.6rem' },
};

export const heroBannerStatsLabelStyles: SxProps<Theme> = {
  color: 'rgba(248,243,234,0.78)',
};
