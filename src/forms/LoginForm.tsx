import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

export default function LoginForm() {
  return (
    <>
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
        type="key"
        id="key"
        autoComplete="key"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="secret"
        label="Secret"
        type="secret"
        id="secret"
        autoComplete="secret"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
      <Grid container>
        <Grid item>
          <Link href="/register" variant="body2">
            {"Don't have an account? Register one"}
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
