
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Alert, Stack, Paper, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect or show success as needed
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        position: 'relative',
        backgroundImage: 'url(/liberty.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0,0,0,0.7)',
          zIndex: 1,
        },
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 400 }}>
        <Paper elevation={3} sx={{
          p: 4,
          borderRadius: 4,
          bgcolor: 'rgba(255,255,255,0.95)',
          border: '2px solid #000',
        }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Typography variant="h5" align="center" fontFamily="Trebuchet MS, Candara, Century Gothic, sans-serif">Login</Typography>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                variant="outlined"
                InputProps={{
                  style: { fontFamily: 'Trebuchet MS, Candara, Century Gothic, sans-serif' },
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                variant="outlined"
                InputProps={{
                  style: { fontFamily: 'Trebuchet MS, Candara, Century Gothic, sans-serif' },
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {error && <Alert severity="error">{error}</Alert>}
              <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
            </Stack>
          </form>
        </Paper>
      </Box>
    </Box>
  );
};

export default LoginScreen;
