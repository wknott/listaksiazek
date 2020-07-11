import React from "react";
import FormField from "./FormField";
import "./styles.css";

const Form = () => (
  <form className="form">
    <fieldset className="form__fieldset">
      <legend className="form__legend">Nowa książka</legend>
      <FormField labelText="Tytuł" placeholder={"Podaj tytuł książki"} />
      <label className="form__label">
        Tytuł:
        <input className="form__input" type="text" placeholder="Podaj tytuł książki" />
      </label>
      <label className="form__label">
        Autor:
        <input className="form__input" type="text" placeholder="Podaj autora" />
      </label>
      <label className="form__label">
        Książka przeczytana
        <input className="form__checkbox" type="checkbox" />
      </label>
      <label className="form__label">
        Data przeczytania:
        <input className="form__input" type="date" />
      </label>
      <button className="form__button">Dodaj książkę</button>
    </fieldset>
  </form >
)

export default Form;