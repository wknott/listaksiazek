import React from "react";
import "./styles.css";
import { formatDateStringShort } from "../logic/utilities";
const BookTable = ({ books }) => (
  <div className="table__container">
    <table className="table">
      <thead>
        <tr className="table__row">
          <th className="table__cell table__cell--header" scope="col">#</th>
          <th className="table__cell table__cell--header" scope="col">Tytuł</th>
          <th className="table__cell table__cell--header" scope="col">Autor</th>
          <th className="table__cell table__cell--header" scope="col">Data przeczytania</th>
        </tr>
      </thead>
      <tbody>
        {books.map(({ name, author, dateOfRead }, index) => (
          <tr className="table__row" key={name}>
            <th className="table__cell table__cell--header" scope="row">{index + 1}</th>
            <td className="table__cell">
              {name}
            </td>
            <td className="table__cell">{author}</td>
            <td className={`table__cell${dateOfRead ? "" : " table__cell--unread"}`}>{dateOfRead ? formatDateStringShort(dateOfRead)
              : "Przeczytana"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default BookTable;
