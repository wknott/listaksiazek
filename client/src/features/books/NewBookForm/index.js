import React, { useState } from "react";
import FormField from "../../../common/FormField";
import { Fieldset, Legend, Button, StyledForm } from "./styled";

const NewBookForm = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isRead, setIsRead] = useState(true);
  const [dateOfRead, setDateOfRead] = useState(new Date().toISOString().split('T')[0]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const book = {
      name: title,
      author: author,
      isRead: isRead,
    }
    isRead ? addBook({ ...book, dateOfRead: dateOfRead }) : addBook(book);
    setTitle("");
    setAuthor("");
  }

  return (
    <StyledForm onSubmit={onFormSubmit}>
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
    </StyledForm>
  )
}

export default NewBookForm;