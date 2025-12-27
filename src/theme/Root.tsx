import React from 'react';
import type {Props} from '@theme/Root';
import {ThemeProvider, createTheme, CssBaseline} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2ecc71',
    },
    background: {
      default: '#ffffff',
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default function Root({children}: Props): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}


