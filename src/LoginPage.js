import React, { useState } from 'react';
import { Button, Stack, TextField, Typography, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here, e.g., send a request to your server
    navigate('/Display');
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="70vh"
  
    >
      <Paper elevation={3} style={{ padding: '40px', maxWidth: '400px', width: '100%' }}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <Stack direction="column" spacing={2}>
            <TextField
              label="Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Login
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginForm;
