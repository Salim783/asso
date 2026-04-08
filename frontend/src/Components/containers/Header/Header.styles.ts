import { SxProps, Theme, alpha } from '@mui/material/styles';

export const headerClasses = {
  root: 'Header-root',
  surface: 'Header-surface',
  navGroup: 'Header-navGroup',
  logoBadge: 'Header-logoBadge',
  localeSwitch: 'Header-localeSwitch',
} as const;

export const headerRootStyles: SxProps<Theme> = {
  position: 'sticky',
  top: 0,
  zIndex: 20,
  px: 0,
  pt: 2,
};

export const getHeaderSurfaceStyles = (theme: Theme): SxProps<Theme> => ({
  px: { xs: 2, md: 3 },
  py: 1.5,
  borderRadius: { xs: 3, md: 4 },
  border: '1px solid',
  borderColor: alpha(theme.palette.primary.main, 0.16),
  backdropFilter: 'blur(14px)',
  backgroundColor: 'rgba(255,253,248,0.9)',
  boxShadow: '0 12px 28px rgba(27, 33, 31, 0.04)',
});

export const getHeaderNavLinkStyles = (isActive: boolean): SxProps<Theme> => ({
  px: 1.5,
  py: 1,
  borderRadius: 1.5,
  minWidth: 'auto',
  textDecoration: 'none',
  color: isActive ? 'primary.contrastText' : 'text.secondary',
  backgroundColor: isActive ? 'primary.main' : 'transparent',
  fontWeight: isActive ? 800 : 600,
  '&:hover': {
    textDecoration: 'none',
    color: isActive ? 'primary.contrastText' : 'text.primary',
    backgroundColor: isActive ? 'primary.dark' : 'rgba(20,92,82,0.06)',
  },
  '&.Mui-focusVisible': {
    outline: '3px solid rgba(20,92,82,0.28)',
    outlineOffset: 2,
  },
});

export const headerLogoBadgeStyles: SxProps<Theme> = {
  width: 58,
  height: 58,
  borderRadius: '10px',
  display: 'grid',
  placeItems: 'center',
  background: 'linear-gradient(180deg, rgba(255,255,255,0.96), rgba(217,236,232,0.72))',
  border: '1px solid',
  borderColor: 'divider',
};

export const headerLogoTitleStyles: SxProps<Theme> = {
  lineHeight: 1,
  fontSize: '1.35rem',
};

export const headerLogoLinkStyles: SxProps<Theme> = {
  textDecoration: 'none',
  color: 'inherit',
  alignItems: 'center',
};

export const headerNavGroupStyles: SxProps<Theme> = {
  px: 1,
  py: 0.5,
  alignItems: 'center',
  borderRadius: 2,
  backgroundColor: 'rgba(255,255,255,0.6)',
  border: '1px solid',
  borderColor: 'divider',
};

export const headerLocaleSwitchStyles: SxProps<Theme> = {
  backgroundColor: 'rgba(255,255,255,0.64)',
  borderRadius: 2,
  '& .MuiToggleButton-root': {
    border: '1px solid transparent',
    px: 1.4,
    py: 0.8,
    borderRadius: 1.5,
    color: 'text.primary',
  },
  '& .MuiToggleButton-root.Mui-selected': {
    backgroundColor: 'primary.main',
    color: 'primary.contrastText',
    borderColor: 'primary.main',
  },
  '& .MuiToggleButton-root.Mui-selected:hover': {
    color: 'primary.contrastText',
    backgroundColor: 'primary.dark',
  },
};

export const headerMobileLocaleSwitchStyles: SxProps<Theme> = {
  width: 'fit-content',
  ...headerLocaleSwitchStyles,
};
