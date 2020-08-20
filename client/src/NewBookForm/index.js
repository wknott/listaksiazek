import React, { useState } from "react";
import FormField from "../FormField/FormField";
import { Fieldset, Legend, Button } from "./styled";

const NewBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isRead, setIsRead] = useState(false);

  return (
    <form>
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
        {!isRead || <FormField type="date" labelText="Data przeczytania" />}
        <Button>Dodaj książkę</Button>
      </Fieldset>
    </form>
  )
}

export default NewBookForm;