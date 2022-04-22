import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router";


const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#F9F9F9',
      },
  
  
    },
  });
  

export default function SignUp() {
  
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newUser = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password')
    };
    await fetch("https://homely-user-server.herokuapp.com/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
     body: JSON.stringify(newUser),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
    navigate("/");
  };

  return (
        <Box
          theme={theme}
          sx={{  
            margin:'auto',
            marginTop:'10%',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            width:700,
            height:700,
            borderRadius:'10%',
            boxShadow: 1,
            backgroundColor: 'secondary',
            '&:hover': {
              backgroundColor: 'secondary',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
       >
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'primary' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                </Grid>
                </Grid>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                <Grid item>
                    <Link href="#" variant="body2">
                    Already have an account? Sign in
                    </Link>
                </Grid>
                </Grid>
            </Box>
            </Box>
        </Container>
        </ThemeProvider>
     </Box>   
  );
}