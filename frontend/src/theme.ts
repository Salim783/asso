import { alpha, createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#145c52',
      light: '#d9ece8',
      dark: '#0b342f',
      contrastText: '#f8f3ea',
    },
    secondary: {
      main: '#c27b47',
      light: '#f4e3d4',
      dark: '#7f4c27',
      contrastText: '#f8f3ea',
    },
    background: {
      default: '#f5efe5',
      paper: '#fffdf8',
    },
    text: {
      primary: '#1b211f',
      secondary: '#5f6863',
    },
    divider: alpha('#145c52', 0.12),
  },
  typography: {
    fontFamily: 'var(--font-manrope), sans-serif',
    h1: {
      fontFamily: 'var(--font-cormorant), serif',
      fontWeight: 700,
      letterSpacing: '-0.03em',
      lineHeight: 0.95,
    },
    h2: {
      fontFamily: 'var(--font-cormorant), serif',
      fontWeight: 700,
      letterSpacing: '-0.03em',
      lineHeight: 0.98,
    },
    h3: {
      fontFamily: 'var(--font-cormorant), serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'var(--font-cormorant), serif',
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    overline: {
      fontSize: '0.78rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 10,
  },
  shadows: [
    'none',
    '0 10px 30px rgba(17, 37, 32, 0.05)',
    '0 14px 36px rgba(17, 37, 32, 0.07)',
    '0 20px 45px rgba(17, 37, 32, 0.08)',
    '0 24px 52px rgba(17, 37, 32, 0.1)',
    '0 28px 58px rgba(17, 37, 32, 0.12)',
    '0 32px 64px rgba(17, 37, 32, 0.13)',
    '0 36px 70px rgba(17, 37, 32, 0.15)',
    '0 40px 76px rgba(17, 37, 32, 0.16)',
    '0 44px 82px rgba(17, 37, 32, 0.18)',
    '0 48px 88px rgba(17, 37, 32, 0.2)',
    '0 52px 94px rgba(17, 37, 32, 0.22)',
    '0 56px 100px rgba(17, 37, 32, 0.24)',
    '0 60px 106px rgba(17, 37, 32, 0.26)',
    '0 64px 112px rgba(17, 37, 32, 0.28)',
    '0 68px 118px rgba(17, 37, 32, 0.3)',
    '0 72px 124px rgba(17, 37, 32, 0.32)',
    '0 76px 130px rgba(17, 37, 32, 0.34)',
    '0 80px 136px rgba(17, 37, 32, 0.36)',
    '0 84px 142px rgba(17, 37, 32, 0.38)',
    '0 88px 148px rgba(17, 37, 32, 0.4)',
    '0 92px 154px rgba(17, 37, 32, 0.42)',
    '0 96px 160px rgba(17, 37, 32, 0.44)',
    '0 100px 166px rgba(17, 37, 32, 0.46)',
    '0 104px 172px rgba(17, 37, 32, 0.48)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            'linear-gradient(180deg, rgba(255,253,248,0.92) 0%, rgba(245,239,229,1) 100%)',
        },
        '::selection': {
          backgroundColor: alpha('#145c52', 0.2),
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 6,
          paddingInline: 22,
          minHeight: 48,
          '&.Mui-focusVisible': {
            outline: '3px solid rgba(20,92,82,0.28)',
            outlineOffset: 2,
          },
          '&.MuiButton-containedPrimary': {
            color: '#f8f3ea',
            backgroundColor: '#145c52',
            '&:hover': {
              backgroundColor: '#0f4a42',
            },
          },
          '&.MuiButton-containedSecondary': {
            color: '#f8f3ea',
            backgroundColor: '#7f4c27',
            '&:hover': {
              backgroundColor: '#6b3d1d',
            },
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: '#1b211f',
          borderColor: alpha('#145c52', 0.18),
          '&.Mui-selected': {
            color: '#f8f3ea',
            backgroundColor: '#145c52',
            borderColor: '#145c52',
          },
          '&.Mui-selected:hover': {
            color: '#f8f3ea',
            backgroundColor: '#0f4a42',
          },
          '&.Mui-focusVisible': {
            outline: '3px solid rgba(20,92,82,0.28)',
            outlineOffset: 2,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;
