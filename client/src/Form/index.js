import React from "react";
import FormField from "./FormField";
import "./styles.css";

const Form = () => (
  <form className="form">
    <fieldset className="form__fieldset">
      <legend className="form__legend">Nowa książka</legend>
      <FormField labelText="Tytuł" placeholder={"Podaj tytuł książki"} />
      <FormField labelText="Autor" placeholder={"Podaj autora"} />
      <FormField labelText="Książka przeczytana" type={"checkbox"} />
      <FormField labelText="Data przeczytania" type={"date"} />
      <button className="form__button">Dodaj książkę</button>
    </fieldset>
  </form >
)

export default Form;