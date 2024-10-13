import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { keyframes } from '@emotion/react';

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

const Feature = ({ icon, title, description }) => (
  <Card
    elevation={3}
    sx={{
      borderRadius: '12px',
      width: '100%',
      height: '100%',

        border: '1px solid rgba(0, 0, 0, 0.125)', // Apply a solid border with the desired color

      
      backdropFilter: 'blur(16px) saturate(180%)',
      WebkitBackdropFilter: 'blur(16px) saturate(180%)',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
      },
      animation: `${floatAnimation} 5s ease-in-out infinite`,
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center', // Center items horizontally
    }}
  >
    <CardContent>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        {/* {icon} */}
        <Typography variant="h5" component="h2" gutterBottom sx={{ }}>
          {title}
        </Typography>
        <Box sx={{ textAlign: 'left' }}>
          {description.map((point, index) => (
            <Typography key={index} variant="body1" color="text.secondary" sx={{ mb: 1 }}>
              - {point}
            </Typography>
          ))}
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const Features = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Our Features
        </Typography>
        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={4}>
            <Feature
              title="User Management"
              description={[
                "User Registration & Authentication: Allow users to register, log in, and manage their profiles.",
                "Role-Based Access Control: Different roles (e.g., admin, librarian, member) with specific permissions."
              ]}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Feature
              title="Book Management"
              description={[
                "Cataloging: Add, update, and delete book records with details like title, author, ISBN, genre.",
                "Book Details: View detailed information about a book, including availability."
              ]}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Feature
              title="Borrowing & Returning"
              description={[
                "Check-Out & Check-In: Allow users to borrow and return books. Track the due dates and manage overdue books."
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
