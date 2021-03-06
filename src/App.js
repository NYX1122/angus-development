import './App.css';
import React from 'react';

import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';

import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header></Header>
        <Box height='67.8px'></Box>
        <Landing></Landing>
        <Projects></Projects>
      </Box>
    </ThemeProvider>
  );
}