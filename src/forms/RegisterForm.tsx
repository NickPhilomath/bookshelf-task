import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

export default function RegisterForm() {
  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        autoComplete="name"
        autoFocus
      />
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
        margin="normal"
        required
        fullWidth
        name="key"
        label="Key"
        type="password"
        id="key"
        autoComplete="key"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="secret"
        label="secret"
        type="password"
        id="secret"
        autoComplete="secret"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Register
      </Button>
      <Grid container>
        <Grid item>
          <Link href="/login" variant="body2">
            {'Already registered? Login'}
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
