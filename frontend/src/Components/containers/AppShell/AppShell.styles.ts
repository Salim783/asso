import { SxProps, Theme } from '@mui/material/styles';

export const appShellClasses = {
  root: 'AppShell-root',
  main: 'AppShell-main',
} as const;

export const appShellStyles: Record<(typeof appShellClasses)[keyof typeof appShellClasses], SxProps<Theme>> = {
  [appShellClasses.root]: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'clip',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 120,
      left: '-8%',
      width: 360,
      height: 220,
      transform: 'rotate(-12deg)',
      borderRadius: '24px',
      background: 'linear-gradient(135deg, rgba(194,123,71,0.08), rgba(194,123,71,0))',
      pointerEvents: 'none',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 220,
      right: '-8%',
      width: 420,
      height: 260,
      transform: 'rotate(14deg)',
      borderRadius: '24px',
      background: 'linear-gradient(135deg, rgba(20,92,82,0.08), rgba(20,92,82,0))',
      pointerEvents: 'none',
    },
  },
  [appShellClasses.main]: {
    flex: 1,
    position: 'relative',
    zIndex: 1,
  },
};
