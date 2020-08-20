import React, { useState } from "react";
import FormField from "../FormField/FormField";
import { Fieldset, Legend, Button } from "./styled";

const NewBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isRead, setIsRead] = useState(false);
  const [dateOfRead, setDateOfRead] = useState(new Date().toISOString().split('T')[0]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (isRead) {
      const book = {
        title: title,
        author: author,
        isRead: isRead,
        dateOfRead: dateOfRead,
      }
      console.log(book)
    }
    else {
      const book = {
        title: title,
        author: author,
        isRead: isRead,
      }
      console.log(book)
    }
  }

  return (
    <form onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Nowa Książka</Legend>
        <FormField
          labelText="Tytuł"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          placeholder="Podaj tytuł książki"
        />
        <FormField
          labelText="Autor"
          value={author}
          onChange={({ target }) => setAuthor(target.value)}
          placeholder="Podaj autora"
        />
        <FormField
          type="checkbox"
          labelText="Książka przeczytana"
          checked={isRead}
          value={"checkbox"}
          onChange={() => setIsRead(!isRead)}
        />
        {!isRead ||
          <FormField
            type="date"
            value={dateOfRead}
            labelText="Data przeczytania"
            onChange={({ target }) => setDateOfRead(target.value)}
          />}
        <Button>Dodaj książkę</Button>
      </Fieldset>
    </form>
  )
}

export default NewBookForm;