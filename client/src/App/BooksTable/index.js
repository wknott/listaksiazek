import React, { useState } from "react";
import { formatDateStringShort } from "../../logic/utilities";
import { TableContainer, Table, TableRow, TableCell, TableHeader } from "./styled";

const BookTable = ({ books, markBookAsRead, sortBooks }) => {
  const [directionOfSort, setDirectionOfSort] = useState({
    name: null,
    author: null,
    dateOfRead: null,
  });

  const handleBooksSort = (key) => {
    if (directionOfSort[key] === null || directionOfSort[key] === "asc") {
      sortBooks(books, key);
      setDirectionOfSort({
        name: key === "name" ? "desc" : null,
        author: key === "author" ? "desc" : null,
        dateOfRead: key === "dateOfRead" ? "desc" : null,
      });
    }
    else {
      sortBooks(books, key, "desc");
      setDirectionOfSort({
        name: key === "name" ? "asc" : null,
        author: key === "author" ? "asc" : null,
        dateOfRead: key === "dateOfRead" ? "asc" : null,
      });
    }
  }

  return (
    <TableContainer>
      <Table>
        <thead>
          <TableRow>
            <TableHeader scope="col">#</TableHeader>
            <TableHeader scope="col" onClick={() => handleBooksSort("name")}>
              Tytuł {directionOfSort.name === null ? "" : directionOfSort.name === "asc" ? "↑" : "↓"}
            </TableHeader>
            <TableHeader scope="col" onClick={() => handleBooksSort("author")}>
              Autor {directionOfSort.author === null ? "" : directionOfSort.author === "asc" ? "↑" : "↓"}
            </TableHeader>
            <TableHeader scope="col" onClick={() => handleBooksSort("dateOfRead")}>
              Data przeczytania {
                directionOfSort.dateOfRead === null ?
                  "" :
                  directionOfSort.dateOfRead === "asc" ?
                    "↑" :
                    "↓"
              }
            </TableHeader>
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
              {dateOfRead ?
                <TableCell>
                  {formatDateStringShort(dateOfRead)}
                </TableCell> :
                <TableCell unread onClick={() => markBookAsRead(_id)}>
                  Oznacz jako przeczytana
              </TableCell>
              }
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  )
}

export default BookTable;
