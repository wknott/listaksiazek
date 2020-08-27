import React from "react";
import FormField from "../FormField";
import { Fieldset, Legend } from "./styled";
import Select from "./Select";

const SettingsForm = ({ showRead, setShowRead, options, selectedYear, setSelectedYear }) => (
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
      {showRead &&
        <Select
          labelText="Wybierz rok"
          name="yearSelect"
          options={options}
          value={selectedYear}
          onChange={({ target }) => setSelectedYear(target.value)}
        />
      }
    </Fieldset>
  </form>
)

export default SettingsForm;