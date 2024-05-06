import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, TextField } from '@mui/material';

import { createBook, listAllBooks } from '@/redux/books/actions';
import { selectBooksList } from '@/redux/books/selector';
import BookCard from '@/components/BookCard';

export default function Home() {
  const dispatch = useDispatch();

  const bookList = useSelector(selectBooksList);

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
    dispatch(createBook('9781118464465'));
    dispatch(listAllBooks());
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }} width={{ sm: '100%', md: '70%' }} mx="auto" my="50px">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {bookList.map((book, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
