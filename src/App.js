import './App.css';
import React from 'react';

import Header from './components/Header';

import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header></Header>
      </Box>
    </ThemeProvider>
  );
}