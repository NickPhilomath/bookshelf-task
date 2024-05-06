import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface BookInfo {
  cover: string;
  title: string;
  author: string;
  pages: number;
  published: number;
  isbn: string;
}

interface Book {
  book: BookInfo;
  status: number;
}

export default function BookCard({ book: bookData }: { book: Book }) {
  const { book } = bookData;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={book.cover} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {book.author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {book.pages} pages
            <br />
            published in {book.published}
            <br />
            ISBN number: {book.isbn}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
