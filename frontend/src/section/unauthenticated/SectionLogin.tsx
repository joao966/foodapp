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
import Grid2 from '@mui/material/Unstable_Grid2';
import { useRouter } from 'next/router';

const SectionSignIn = () => {
  const { push } = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    push('/dashboard');
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
      <Container maxWidth={'xs'}>
        <Grid2 container spacing={2}>
          <Grid2 xs={12} md={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
          </Grid2>
          <Grid2 xs={12} md={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid2>
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Lembre-me" />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Redefinir senha?
              </Link>
            </Grid>
          </Grid>
        </Grid2>
      </Container>
    </Box>
  );
};

export { SectionSignIn };
