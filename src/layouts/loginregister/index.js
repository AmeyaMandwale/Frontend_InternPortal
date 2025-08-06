import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  Stack,
} from '@mui/material';

const LoginRegisterModal = ({ open, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '' });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (isLogin) {
      console.log('Login with:', formData.email, formData.password);
    } else {
      console.log('Register with:', formData);
    }
    onClose();
  };

  const inputStyle = {
    borderRadius: 2,
    backgroundColor: 'white',
    input: {
      color: 'black',
      '&::placeholder': {
        color: 'black',
        opacity: 1,
      },
    },
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          p: 2,
          background: '#f4f6f8',
        },
      }}
    >
      <DialogTitle textAlign="center" sx={{ fontWeight: 'bold', mb: 1 }}>
        {isLogin ? 'Welcome Back!' : 'Create Account'}
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2}>
          {!isLogin && (
            <TextField
              placeholder="Enter your name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              InputProps={{ sx: inputStyle }}
            />
          )}
          <TextField
            placeholder="Enter your email"
            variant="outlined"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            InputProps={{ sx: inputStyle }}
          />
          <TextField
            placeholder="Enter your password"
            variant="outlined"
            fullWidth
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            InputProps={{ sx: inputStyle }}
          />
        </Stack>
      </DialogContent>

      <DialogActions sx={{ flexDirection: 'column', gap: 2, px: 3, pb: 2 }}>
        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
          sx={{ borderRadius: 2, py: 1 }}
        >
          {isLogin ? 'Sign In' : 'Register'}
        </Button>

        <Typography variant="body2" align="center">
          {isLogin ? "Don't have an account?" : 'Already registered?'}{' '}
          <Button variant="text" size="small" onClick={handleToggle}>
            {isLogin ? 'Register' : 'Login'}
          </Button>
        </Typography>
      </DialogActions>
    </Dialog>
  );
};

LoginRegisterModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginRegisterModal;
