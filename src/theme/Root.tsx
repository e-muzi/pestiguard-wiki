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
          primary: {main: '#2ecc71'},
        },
        shape: {borderRadius: 10},
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


