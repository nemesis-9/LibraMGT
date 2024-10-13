import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import backgroundImage from './heroimg.jpg'; // Correct import statement
import bookImage from './book.png'; // Add an image of a book

const Hero = () => {
  return (
    <Box
      sx={{
        height: '70vh', // full height
        backgroundImage: `url(${backgroundImage})`, // use backticks for template literals
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'blue',
        overflow: 'hidden', // to contain floating elements
      }}
    >
     {/* Floating books (original set) */}
<Box
component="img"
src={bookImage}
sx={{
  position: 'absolute',
  top: '10%',
  left: '20%',
  width: '50px',
  animation: 'floatBook1 5s ease-in-out infinite',
}}
alt="floating book"
/>
<Box
component="img"
src={bookImage}
sx={{
  position: 'absolute',
  top: '30%',
  right: '10%',
  width: '70px',
  animation: 'floatBook2 7s ease-in-out infinite',
}}
alt="floating book"
/>
<Box
component="img"
src={bookImage}
sx={{
  position: 'absolute',
  bottom: '20%',
  left: '40%',
  width: '60px',
  animation: 'floatBook3 6s ease-in-out infinite',
}}
alt="floating book"
/>

{/* Floating books (additional set) */}
<Box
component="img"
src={bookImage}
sx={{
  position: 'absolute',
  top: '15%',
  right: '30%',
  width: '55px',
  animation: 'floatBook4 6s ease-in-out infinite',
}}
alt="floating book"
/>
<Box
component="img"
src={bookImage}
sx={{
  position: 'absolute',
  bottom: '25%',
  right: '15%',
  width: '65px',
  animation: 'floatBook5 7s ease-in-out infinite',
}}
alt="floating book"
/>
<Box
component="img"
src={bookImage}
sx={{
  position: 'absolute',
  bottom: '10%',
  left: '10%',
  width: '45px',
  animation: 'floatBook6 5s ease-in-out infinite',
}}
alt="floating book"
/>


      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontFamily: '"Open Sans", sans-serif', // font-family for title
            fontSize: '5rem',
            color: '#ffffff',
            textShadow: '3px 4px 1.1px #042a2c',
            mb: 2, // margin bottom
          }}
        >
          Welcome to LibraryMS
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            fontSize: '2rem',
            color: '#ffffff',
            textShadow: '3px 4px 1.1px #042a2c',
            mb: 4, // margin bottom
          }}
        >
          Manage your library efficiently with our state-of-the-art system
        </Typography>
       
      </Container>

      {/* Add CSS animations */}
      <style>
  {`
    @keyframes floatBook1 {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0px); }
    }

    @keyframes floatBook2 {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-25px); }
      100% { transform: translateY(0px); }
    }

    @keyframes floatBook3 {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
      100% { transform: translateY(0px); }
    }

    @keyframes floatBook4 {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-22px); }
      100% { transform: translateY(0px); }
    }

    @keyframes floatBook5 {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-30px); }
      100% { transform: translateY(0px); }
    }

    @keyframes floatBook6 {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-18px); }
      100% { transform: translateY(0px); }
    }
  `}
</style>

    </Box>
  );
};

export default Hero;
