import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/logo'; // This path should be correct now

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Logo sx={{ width: 380, height: 80, cursor: 'pointer' }} onClick={() => navigate('/')} />
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="primary" onClick={() => navigate('/')}>Home</Button>
          <Button color="primary" onClick={() => navigate('/about')}>About</Button>
          <Button color="primary" onClick={() => navigate('/contact')}>Contact Us</Button>
          <Button 
            variant="outlined" 
            color="primary" 
            onClick={() => navigate('/login')} 
            sx={{ borderRadius: '20px' }}
          >
            Log In
          </Button>
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={() => navigate('/signup')} 
            sx={{ borderRadius: '20px' }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;