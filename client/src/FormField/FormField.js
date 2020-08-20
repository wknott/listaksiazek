import React from "react";
import { Label, LabelText } from "./styled";

const FormField = ({ labelText, placeholder, type, name, value, checked, options, selectedOption, onChange }) => (
  <p>
    <Label type={type}>
      <LabelText>{labelText}:</LabelText>
      {type === "select"
        ?
        <select className="form__field" name={name} value={selectedOption}>
          {options.map(option => (
            <option key={option}>{option}</option>
          ))}
        </select>
        :
        <input
          className={`form__field form__field--${type}`}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          defaultChecked={checked}
          autoFocus
          onChange={onChange}
        />}
    </Label>
  </p>
)

export default FormField;