import './App.css';
import React from 'react';

import Header from './components/Header';
import Landing from './components/Landing';

import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <p>Hello</p>
        <Header></Header>
        <Landing></Landing>
      </Box>
    </ThemeProvider>
  );
}