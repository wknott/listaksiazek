import React from "react";
import FormField from "../FormField/FormField";
import { Fieldset, Legend, Button } from "./styled";

const NewBookForm = () => {
  return (
    <form>
      <Fieldset>
        <Legend>Nowa Książka</Legend>
        <FormField labelText="Tytuł" name="test" placeholder="Podaj tytuł książki" />
        <FormField labelText="Autor" name="test" placeholder="Podaj autora" />
        <FormField type="checkbox" labelText="Książka przeczytana" />
        <FormField type="date" labelText="Data przeczytania" />
        <Button>Dodaj książkę</Button>
      </Fieldset>
    </form>
  )
}

export default NewBookForm;