import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './landing/Navbar';
import Hero from './landing/Hero';
import Features from './landing/Feature';
import About from './landing/About';

import Footer from './landing/Footer';
import Contact from './landing/Contact';

const theme = createTheme({
  palette: {
    background: {
      default: '#ffffff',
    },
    primary: {
      main: '#1976d2', // blue
    },
    secondary: {
      main: '#f50057', // pink
    },
    success: {
      main: '#4caf50', // green
    },
    warning: {
      main: '#ff9800', // orange
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

const LandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default LandingPage;