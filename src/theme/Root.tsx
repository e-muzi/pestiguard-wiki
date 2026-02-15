import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { colors, shadows, typography } from './design-tokens';

interface Props {
  children: React.ReactNode;
}

export default function Root({ children }: Props): JSX.Element {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'light',
          primary: {
            main: colors.primary,
            light: '#7d9072',
            dark: '#4d5f44',
            contrastText: colors.primaryForeground,
          },
          secondary: {
            main: colors.secondary,
            contrastText: colors.secondaryForeground,
          },
          background: {
            default: colors.background,
            paper: colors.background,
          },
          text: {
            primary: colors.foreground,
            secondary: colors.mutedForeground,
          },
          divider: colors.border,
        },
        typography: {
          fontFamily: typography.fontFamilyBody,
          h1: { fontFamily: typography.fontFamilyHeading, fontWeight: 700 },
          h2: { fontFamily: typography.fontFamilyHeading, fontWeight: 700 },
          h3: { fontFamily: typography.fontFamilyHeading, fontWeight: 700 },
          h4: { fontFamily: typography.fontFamilyHeading, fontWeight: 700 },
          h5: { fontFamily: typography.fontFamilyHeading, fontWeight: 700 },
          h6: { fontFamily: typography.fontFamilyHeading, fontWeight: 700 },
        },
        shape: { borderRadius: 16 },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                borderRadius: 9999,
                padding: '12px 32px',
                minHeight: 48,
                boxShadow: 'none',
                fontWeight: 700,
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: shadows.buttonHover,
                  transform: 'scale(1.05)',
                },
                '&:active': {
                  transform: 'scale(0.98)',
                },
              },
              contained: {
                boxShadow: shadows.button,
                '&:hover': {
                  boxShadow: shadows.buttonHover,
                },
              },
              outlined: {
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                },
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
                border: `1px solid ${colors.border}80`,
                boxShadow: shadows.soft,
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                '&:hover': {
                  boxShadow: shadows.softHover,
                },
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                boxShadow: 'none',
                borderBottom: 'none',
              },
            },
          },
        },
      }),
    [],
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
