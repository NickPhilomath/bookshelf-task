import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import LoginForm from '@/forms/LoginForm';
import { login } from '@/redux/auth/actions';
import { selectAuth } from '@/redux/auth/selector';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isSuccess, isLoggedIn } = useSelector(selectAuth);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const formFields = {
      email: data.get('email'),
      key: data.get('key'),
      secret: data.get('secret'),
    };

    dispatch(login(formFields));
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate('/');
    }
  }, [isSuccess]);

  return (
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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <LoginForm />
        </Box>
      </Box>
    </Container>
  );
}
