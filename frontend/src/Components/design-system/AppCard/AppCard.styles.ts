import { SxProps, Theme } from '@mui/material/styles';

export type AppCardTone = 'primary' | 'secondary' | 'neutral';
export type AppCardAlign = 'left' | 'center';

export const appCardClasses = {
  root: 'AppCard-root',
  content: 'AppCard-content',
  icon: 'AppCard-icon',
} as const;

export const getAppCardRootStyles = (
  tone: AppCardTone,
  minHeight?: number | string,
  hoverable = false,
): SxProps<Theme> => ({
  minHeight,
  borderRadius: 4,
  border: '1px solid',
  borderColor: 'divider',
  overflow: 'hidden',
  ...(tone === 'secondary'
    ? { background: 'linear-gradient(180deg, rgba(244,227,212,0.68) 0%, rgba(255,253,248,1) 56%)' }
    : tone === 'primary'
      ? { background: 'linear-gradient(180deg, rgba(217,236,232,0.56) 0%, rgba(255,253,248,1) 52%)' }
      : { backgroundColor: 'background.paper' }),
  transition: hoverable ? 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease' : undefined,
  '&:hover': hoverable
    ? {
        transform: 'translateY(-4px)',
        boxShadow: 4,
        borderColor: tone === 'secondary' ? 'secondary.main' : 'primary.main',
      }
    : undefined,
});

export const getAppCardContentStyles = (align: AppCardAlign): SxProps<Theme> => ({
  p: 3.25,
  textAlign: align,
  alignItems: align === 'center' ? 'center' : 'flex-start',
});

export const getAppCardIconStyles = (tone: AppCardTone): SxProps<Theme> => ({
  width: 64,
  height: 64,
  borderRadius: '10px',
  backgroundColor: tone === 'secondary' ? 'secondary.light' : 'primary.light',
  color: tone === 'secondary' ? 'secondary.dark' : 'primary.dark',
  fontSize: 28,
  border: '1px solid',
  borderColor: tone === 'secondary' ? 'rgba(127,76,39,0.12)' : 'rgba(20,92,82,0.14)',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.7)',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
});

export const appCardTitleStyles: SxProps<Theme> = {
  fontSize: '1.28rem',
};

export const appCardDescriptionStyles: SxProps<Theme> = {
  lineHeight: 1.8,
};
