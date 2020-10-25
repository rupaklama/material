import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from './ui/Theme';
import Header from './ui/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Namaste
    </ThemeProvider>
  );
}

export default App;
