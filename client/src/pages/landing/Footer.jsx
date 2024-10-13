import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';
import './Footer.css'; // Ensure this path is correct
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Container className="container">
        <Grid container className="row">
          {/* Company Column */}
          <Grid item xs={12} sm={6} md={3} className="footer-col">
            <Typography variant="h4">About Us</Typography>
            <ul>
              <li><Link href="#" underline="none">Mission</Link></li>
              <li><Link href="#" underline="none">History  </Link></li>
              <li><Link href="#" underline="none">Privacy policy</Link></li>
              <li><Link href="#" underline="none">Overview of the library</Link></li>
            </ul>
          </Grid>

          {/* Get Help Column */}
          <Grid item xs={12} sm={6} md={3} className="footer-col">
            <Typography variant="h4">Services</Typography>
            <ul>
              <li><Link href="#" underline="none">Events</Link></li>
              <li><Link href="#" underline="none">Support</Link></li>
              <li><Link href="#" underline="none">Benefits</Link></li>
              <li><Link href="#" underline="none">Community programs</Link></li>
              <li><Link href="#" underline="none">Membership information</Link></li>
            </ul>
          </Grid>

          {/* Online Shop Column */}
          <Grid item xs={12} sm={6} md={3} className="footer-col">
            <Typography variant="h4">Get Help</Typography>
            <ul>
              <li><Link href="#" underline="none">FAQ </Link></li>
              <li><Link href="#" underline="none">Contact Us</Link></li>
              <li><Link href="#" underline="none">Book Returns </Link></li>
              <li><Link href="#" underline="none">Library Catalog </Link></li>
              <li><Link href="#" underline="none">Account Management</Link></li>
            </ul>
          </Grid>

          {/* Follow Us Column */}
          <Grid item xs={12} sm={6} md={3} className="footer-col">
            <Typography variant="h4">Follow us</Typography>
            <div className="social-links">
              <Link href="#" underline="none"><i className="fab fa-facebook-f" /></Link>
              <Link href="#" underline="none"><i className="fab fa-twitter" /></Link>
              <Link href="#" underline="none"><i className="fab fa-instagram" /></Link>
              <Link href="#" underline="none"><i className="fab fa-linkedin-in" /></Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
