import { SxProps, Theme } from '@mui/material/styles';

export const footerClasses = {
  root: 'Footer-root',
  surface: 'Footer-surface',
  socialLink: 'Footer-socialLink',
} as const;

export const footerRootStyles: SxProps<Theme> = {
  pb: 4,
  pt: { xs: 4, md: 6 },
  position: 'relative',
  zIndex: 1,
};

export const footerSurfaceStyles: SxProps<Theme> = {
  p: { xs: 3, md: 4.5 },
  borderRadius: 4,
  border: '1px solid rgba(255,255,255,0.08)',
  background:
    'linear-gradient(135deg, rgba(11,52,47,0.99) 0%, rgba(20,92,82,0.97) 58%, rgba(103,68,43,0.98) 100%)',
  color: 'primary.contrastText',
  overflow: 'hidden',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '42%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0))',
    clipPath: 'polygon(34% 0, 100% 0, 100% 100%, 0 100%)',
  },
};

export const footerTitleStyles: SxProps<Theme> = {
  color: 'inherit',
  fontSize: { xs: '2.6rem', md: '3.4rem' },
};

export const footerDescriptionStyles: SxProps<Theme> = {
  color: 'rgba(248,243,234,0.76)',
  lineHeight: 1.8,
};

export const footerSocialLinkStyles: SxProps<Theme> = {
  width: 48,
  height: 48,
  borderRadius: '10px',
  display: 'grid',
  placeItems: 'center',
  border: '1px solid rgba(255,255,255,0.18)',
  color: 'inherit',
  backgroundColor: 'rgba(255,255,255,0.06)',
};

export const footerDividerStyles: SxProps<Theme> = {
  borderColor: 'rgba(255,255,255,0.12)',
};

export const footerLinkStyles: SxProps<Theme> = {
  color: 'rgba(248,243,234,0.72)',
};

export const footerMetaStyles: SxProps<Theme> = {
  color: 'rgba(248,243,234,0.68)',
};
