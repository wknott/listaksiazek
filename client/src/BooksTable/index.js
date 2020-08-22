import React from "react";
import { formatDateStringShort } from "../logic/utilities";
import { TableContainer, Table, TableRow, TableCell, TableHeader } from "./styled";

const BookTable = ({ books }) => (
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
        {books.map(({ name, author, dateOfRead }, index) => (
          <TableRow key={name}>
            <TableHeader scope="row">{index + 1}</TableHeader>
            <TableCell>
              {name}
            </TableCell>
            <TableCell>{author}</TableCell>
            <TableCell unread={!dateOfRead}>
              {dateOfRead ? formatDateStringShort(dateOfRead) : "Oznacz jako przeczytana"}
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  </TableContainer>
)

export default BookTable;
