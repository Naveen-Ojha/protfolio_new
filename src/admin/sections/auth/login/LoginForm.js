import React, { useState, useContext } from 'react';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Button } from '@mui/material';
// components
import Iconify from '../../../component/iconify';
import SimpleSnackbar from '../../../../common/Snackbar'
import { AdminContext } from '../../../context/AdminContext'
// ----------------------------------------------------------------------

export default function LoginForm() {
  const { loginUser, error } = useContext(AdminContext)

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <SimpleSnackbar res={error.message} />
      <form onSubmit={loginUser}>
        <Stack spacing={3}>
          <TextField name="email" label="Email address" />

          <TextField
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          {/* <Checkbox name="remember" label="Remember me" /> */}
          <span></span>
          <Link variant="subtitle2" underline="hover">
            Forgot password?
          </Link>
        </Stack>

        <Button fullWidth size="large" type="submit" variant="contained">
          Login
        </Button>
      </form>
    </>
  );
}
