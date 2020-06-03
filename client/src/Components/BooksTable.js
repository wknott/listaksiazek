import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

export default function BooksTable({ books, selectedYear }) {
  const classes = useStyles();

  function formatDateStringShort(dateString) {
    const dateOfRead = new Date(dateString);
    return dateOfRead.toLocaleDateString("pl-pl", {
      //weekday: 'short',
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Tytuł</TableCell>
            <TableCell>Autor</TableCell>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books
            .filter((book) =>
              selectedYear === ""
                ? 1
                : new Date(book.dateOfRead).getFullYear() === selectedYear
            )
            .map((book, index) => (
              <TableRow key={book.name}>
                <TableCell>{index + 1}</TableCell>
                <TableCell component="th" scope="row">
                  {book.name}
                </TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{formatDateStringShort(book.dateOfRead)}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
