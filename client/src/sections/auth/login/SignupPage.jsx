import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { styled } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";
import Logo from "../../../components/logo";

import { apiUrl, methods, routes } from "../../../constants";

// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

const SignupForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    dob: "",
    email: "",
    phone: "",
    password: "",
    isAdmin: false,
    photoUrl: "null",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const tempErrors = {};
    if (!user.name.trim()) {
      tempErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]*$/.test(user.name)) {
      tempErrors.name = "Name should contain only letters and spaces";
    }    
    tempErrors.dob = new Date(user.dob) < new Date() ? "" : "Please select a past date";
    tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email) ? "" : "Please enter a valid email address";
    tempErrors.phone = /^\d{10}$/.test(user.phone) ? "" : "Phone number should be 10 digits";
    tempErrors.password = user.password.length >= 8 ? "" : "Password should be at least 8 characters long";

    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = () => {
    if (validateForm()) {
      axios
        .post(apiUrl(routes.USER, methods.POST), user)
        .then((response) => {
          toast.success("Successfully signed up!");
          console.log(response.data);
          navigate("/login");
        })
        .catch((error) => {
          toast.error(error.response.data.message);
          console.log(error);
        });
    } else {
      toast.error("Please correct the errors in the form.");
    }
  };

  return (
    <>
      <Helmet>
        <title> Sign Up | Library </title>
      </Helmet>

      <StyledRoot>
        <Logo
          sx={{
            position: "fixed",
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        />

        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" textAlign="center" gutterBottom>
              Sign Up
            </Typography>

            <Stack spacing={3}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    value={user.name}
                    required
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Date of Birth"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={user.dob}
                    required
                    onChange={(e) => setUser({ ...user, dob: e.target.value })}
                    error={Boolean(errors.dob)}
                    helperText={errors.dob}
                    inputProps={{ max: new Date().toISOString().split('T')[0] }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={user.email}
                    required
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone"
                    type="tel"
                    value={user.phone}
                    required
                    onChange={(e) => setUser({ ...user, phone: e.target.value })}
                    error={Boolean(errors.phone)}
                    helperText={errors.phone}
                    inputProps={{ maxLength: 10 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    value={user.password}
                    required
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    error={Boolean(errors.password)}
                    helperText={errors.password}
                  />
                </Grid>
              </Grid>

              <Box textAlign="center">
                <Button
                  size="large"
                  variant="contained"
                  onClick={handleSubmit}
                >
                  Sign Up
                </Button>
              </Box>
            </Stack>
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
};

SignupForm.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func,
};

export default SignupForm;