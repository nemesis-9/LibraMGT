import React from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import backgroundImage from './contactus.jpeg'; // Adjust the path based on actual file location

// Styled components using MUI's `styled` utility
const FormContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.14), rgba(0, 0, 0, 0.14)), url(${backgroundImage}) no-repeat center`,
  backgroundSize: 'cover',
  minHeight: '80vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center align items
  justifyContent: 'center',
  padding: '0 5%', // Add some padding to the sides if needed
}));

const FormWrapper = styled(Box)(({ theme }) => ({
  borderRadius: '20px', // Reduced border radius
  padding: '20px', // Reduced padding
  width: '40%', // Smaller width
  boxShadow: '0 0 5px 5px rgba(0, 0, 0, 0.2)',
  backdropFilter: 'blur(5px)',
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  [theme.breakpoints.down('md')]: {
    width: '60%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '90%',
  },
}));

const FormInput = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    fontSize: '16px', // Reduced font size
    lineHeight: '24px',
    fontWeight: 400,
  },
  '& .MuiInputBase-root': {
    fontSize: '16px', // Reduced font size
    lineHeight: '24px',
    fontWeight: 400,
    borderRadius: '4px', // Reduced border radius
    borderColor: '#68bcd0',
    '&.Mui-focused': {
      borderColor: '#515151',
    },
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#000',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#515151',
    },
  },
}));

const FormButton = styled(Button)(({ theme }) => ({
  padding: '0 24px', // Reduced padding
  fontSize: '16px', // Reduced font size
  lineHeight: '36px', // Reduced line height
  border: '1px solid transparent',
  fontWeight: 600,
  borderRadius: '4px', // Reduced border radius
  transition: 'all 0.5s ease',
  cursor: 'pointer',
  boxShadow: '0 0 5px 5px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    borderColor: '#0f4754',
    backgroundColor: '#2fbfdf',
  },
}));

const Contact = () => {
  return (
    <FormContainer>
      <Container maxWidth="md">
        <FormWrapper>
          <Typography variant="h4" component="h2" gutterBottom align="center"> {/* Reduced font size */}
            Contact Us
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <FormInput
              fullWidth
              label="Full Name"
              margin="normal"
              variant="outlined"
            />
            <FormInput
              fullWidth
              label="Email"
              margin="normal"
              variant="outlined"
            />
            <FormInput
              fullWidth
              label="Phone Number"
              margin="normal"
              variant="outlined"
            />
            <FormInput
              fullWidth
              label="Address"
              multiline
              rows={3} // Reduced row count
              margin="normal"
              variant="outlined"
            />
            <Box display="flex" justifyContent="center" mt={2}>
              <FormButton variant="contained" color="primary" size="large">
                Submit
              </FormButton>
            </Box>
          </Box>
        </FormWrapper>
      </Container>
    </FormContainer>
  );
};

export default Contact;
