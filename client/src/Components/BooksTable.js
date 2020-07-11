import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { compareObjects, formatDateStringShort } from "../logic/utilities";

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

export default function BooksTable({ books, selectedYear }) {
  const [sortedField, setSortedField] = useState(null);
  const [sortDirection, setSortDirection] = useState(false);
  let sortedBooks = [...books];
  const classes = useStyles();
  if (sortedField !== null) {
    sortDirection
      ? sortedBooks.sort(compareObjects(sortedField))
      : sortedBooks.sort(compareObjects(sortedField, "desc"));
  }
  const setSortProperties = (field, direction) => {
    setSortedField(field);
    setSortDirection(direction);
  };
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>
              <Button onClick={() => setSortProperties("name", !sortDirection)}>
                Tytuł {sortDirection ? "↓" : "↑"}
              </Button>
            </TableCell>
            <TableCell>
              <Button
                onClick={() => setSortProperties("author", !sortDirection)}
              >
                Autor {sortDirection ? "↓" : "↑"}
              </Button>
            </TableCell>
            <TableCell>
              <Button
                onClick={() => setSortProperties("dateOfRead", !sortDirection)}
              >
                Data {sortDirection ? "↓" : "↑"}
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedBooks
            .filter((book) =>
              selectedYear === ""
                ? 1 && book.hasOwnProperty("dateOfRead")
                : new Date(book.dateOfRead).getFullYear() === selectedYear &&
                book.hasOwnProperty("dateOfRead")
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
