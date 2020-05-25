import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

export default function BookTable() {
  const classes = useStyles();
  const [books, setBooks] = useState([])
  async function loadBooks(){
    try {
      const res = await fetch('/api/books')
      const newBooks = await res.json()
      console.log(newBooks)
      setBooks(newBooks)
    } catch (err) {
      return err
    }
  }
  function formatDateStringShort(dateString){
    const date = new Date(dateString);
    return date.toLocaleDateString('pl-pl', {
      //weekday: 'short',
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };
  useEffect(() => {
    loadBooks()
  },[])
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tytuł</TableCell>
            <TableCell align="left">Autor</TableCell>
            <TableCell align="left">Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.name}>
              <TableCell component="th" scope="row">
                {book.name}
              </TableCell>
              <TableCell align="left">{book.author}</TableCell>
              <TableCell align="left">{formatDateStringShort(book.date)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}