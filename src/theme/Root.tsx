import React from 'react';
import {ThemeProvider, createTheme, CssBaseline} from '@mui/material';

interface Props {
  children: React.ReactNode;
}

export default function Root({children}: Props): JSX.Element {
  const getHtmlMode = (): 'light' | 'dark' => {
    if (typeof document === 'undefined') return 'light';
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  };

  const [mode, setMode] = React.useState<'light' | 'dark'>(getHtmlMode);

  React.useEffect(() => {
    if (typeof document === 'undefined') return;
    const html = document.documentElement;
    const observer = new MutationObserver(() => {
      setMode(getHtmlMode());
    });
    observer.observe(html, {attributes: true, attributeFilter: ['data-theme']});
    return () => observer.disconnect();
  }, []);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            light: '#D2DCB6',
            main: '#A1BC98',
            dark: '#778873',
          },
          secondary: {
            main: '#A1BC98',
          },
          background: {
            default: mode === 'dark' ? '#1a1f1a' : '#F1F3E0',
            paper: mode === 'dark' ? '#1a1f1a' : '#F1F3E0',
          },
          text: {
            primary: mode === 'dark' ? '#F1F3E0' : '#778873',
            secondary: mode === 'dark' ? '#D2DCB6' : '#778873',
          },
        },
        shape: { borderRadius: 10 },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                borderRadius: 8,
                padding: '6px 12px',
                boxShadow: 'none',
                '&:hover': {
                  boxShadow: '0 1px 3px rgba(119, 136, 115, 0.2)',
                },
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06)',
                borderBottom: '1px solid rgba(119, 136, 115, 0.15)',
              },
            },
          },
        },
      }),
    [mode],
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}


