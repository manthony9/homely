import React, { useState }  from 'react';
import Box from '@mui/material/Box';
import '../../styles/login.styles.scss';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
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
      main: '#000000',
    },
    tertiary: {
      main: '#DC143C',
    },


  },
});


export default function Login() {
  const navigate = useNavigate();

  const [passColor, setPassColor] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newUser = {
      email: data.get('email'),
      password: data.get('password')
    };
    const response = await fetch("https://homely-user-server.herokuapp.com/record");
    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }
     
    const records = await response.json();
    console.log(records);
    const newRecord = records.filter((obj) => {
        if (obj.email === newUser.email){
          return obj;
        }
    })
    if (newRecord.length !== 0){
      navigate("/")
    } else {
      setPassColor(!passColor)
    }
    
  
  };

  return (
  <>
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
                Sign in
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                 sx={passColor ? { display: 'none' } : { display: 'inline' }}    
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <TextField
                 sx={passColor ? { display: 'inline' } : { display: 'none' }}             
                  error
                  id="outlined-error-helper-text"
                  label="password"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  helperText="Incorrect Password or Username"
                />
                {console.log(passColor)}
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Box> 
    
  </>  
  );
}
