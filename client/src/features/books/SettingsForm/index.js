import React from "react";
import FormField from "../../../common/FormField";
import { Fieldset, Legend, StyledForm } from "./styled";
import Select from "../../../common/Select";

const SettingsForm = ({ showRead, setShowRead, options, selectedYear, setSelectedYear, query, setQuery }) => (
  <StyledForm>
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
      <FormField
        labelText="Wyszukaj"
        value={query}
        onChange={({ target }) => setQuery(target.value)}
        placeholder="Wyszukaj książkę lub autora"
      />
    </Fieldset>
  </StyledForm>
)

export default SettingsForm;