import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import RegisterForm from '@/forms/RegisterForm';
import { register } from '@/redux/auth/actions';
import { selectAuth } from '@/redux/auth/selector';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isSuccess } = useSelector(selectAuth);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form_data = new FormData(event.currentTarget);
    const formFields = {
      name: form_data.get('name'),
      email: form_data.get('email'),
      key: form_data.get('key'),
      secret: form_data.get('secret'),
    };

    dispatch(register(formFields));
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/login');
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
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <RegisterForm />
        </Box>
      </Box>
    </Container>
  );
}
