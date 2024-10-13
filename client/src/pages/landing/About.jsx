import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

// Define the floating animation
const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const About = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'grey.100', fontFamily: 'Open Sans, sans-serif' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom align="center">
          About Us
        </Typography>
        {/* First Section: Image on the left, text on the right */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'row', 
          flexWrap: 'wrap', 
          alignItems: 'center', 
          justifyContent: 'center', 
          position: 'relative' 
        }}>
          <Box sx={{
            flex: 1, 
            position: 'relative', 
            height: '400px', 
            width: '100%',
            overflow: 'hidden',
            animation: `${floatAnimation} 5s ease-in-out infinite`,
            backgroundImage: 'url("https://img.freepik.com/premium-photo/person-holding-tablet-front-row-books_1234220-21073.jpg?w=1060")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '16px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
            },
          }} />
          <Box sx={{ 
            flex: 1, 
            p: 4, 
            bgcolor: '#0c4c91', 
            color: 'white', 
            borderRadius: '16px',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center'
          }}>
            <Typography variant="h4" component="h2" gutterBottom>
              We are Digital Upgrade
            </Typography>
            <Typography variant="body1" paragraph>
              LibraryMS, based in Evansville, IN, is dedicated to transforming library management through advanced technology solutions. Our goal is to streamline library operations and enhance the experience for both librarians and patrons. We are committed to supporting the growth and efficiency of libraries of all sizes, and we take pride in measuring our success by the positive impact we have on library operations and user satisfaction, not just by sales.
            </Typography>
          </Box>
        </Box>
    
        {/* Second Section: Text on the left, image on the right */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'row-reverse', // Changed to row-reverse to move the image to the right
          flexWrap: 'wrap', 
          alignItems: 'center', 
          justifyContent: 'center', 
          position: 'relative',
          mt: 4
        }}>
          <Box sx={{
            flex: 1, 
            position: 'relative', 
            height: '400px', 
            width: '100%',
            overflow: 'hidden',
            animation: `${floatAnimation} 5s ease-in-out infinite`,
            backgroundImage: 'url("https://img.freepik.com/premium-photo/books-library_1156758-70878.jpg?w=740")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '16px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
            },
          }} />
          <Box sx={{ 
            flex: 1, 
            p: 4, 
            bgcolor: 'white', 
            color: '#0c4c91', 
            borderRadius: '16px',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center'
          }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Preserving Local History
            </Typography>
            <Typography variant="body1" paragraph>
              With years of experience in the library sector, our team has moved into a state-of-the-art facility at 816 N. 9th Ave, Evansville, IN. This location, previously home to Stippler Tool & Supply and Crown Chair Company for over a century, has been thoughtfully renovated to blend historical charm with modern functionality. Our commitment is to deliver a user-friendly, efficient, and adaptable library management system that meets the evolving needs of libraries in the digital age.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
