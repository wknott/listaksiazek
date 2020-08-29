import React from "react";
import { formatDateStringShort } from "../../logic/utilities";
import { TableContainer, Table, TableRow, TableCell, TableHeader } from "./styled";

const BookTable = ({ books, markAsRead }) => (
  <TableContainer>
    <Table>
      <thead>
        <TableRow>
          <TableHeader scope="col">#</TableHeader>
          <TableHeader scope="col">Tytuł</TableHeader>
          <TableHeader scope="col">Autor</TableHeader>
          <TableHeader scope="col">Data przeczytania</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {books.map(({ _id, name, author, dateOfRead }, index) => (
          <TableRow key={_id}>
            <TableHeader scope="row">{index + 1}</TableHeader>
            <TableCell>
              {name}
            </TableCell>
            <TableCell>{author}</TableCell>
            <TableCell unread={!dateOfRead} onClick={() => markAsRead(_id)}>
              {dateOfRead ? formatDateStringShort(dateOfRead) : "Oznacz jako przeczytana"}
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  </TableContainer>
)

export default BookTable;
