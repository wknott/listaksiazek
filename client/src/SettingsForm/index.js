import React from "react";
import FormField from "../FormField/FormField";
import { Fieldset, Legend } from "./styled";
import Select from "./Select";

const SettingsForm = ({ showRead, setShowRead }) => (
  <form>
    <Fieldset>
      <Legend>Ustawienia wyświetlania listy książek</Legend>
      <FormField
        type="radio"
        labelText="Książki przeczytane"
        name="books"
        checked={showRead === true}
        onChange={() => setShowRead(true)}
      />
      <FormField
        type="radio"
        labelText="Książki do przeczytania"
        name="books"
        checked={showRead === false}
        onChange={() => setShowRead(false)}
      />
      <Select
        labelText="Wybierz rok"
        name="yearSelect"
        options={[2001, 2004, 2005]}
        selectedOption={2004}
      />
    </Fieldset>
  </form>
)

export default SettingsForm;