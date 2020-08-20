import React from "react";
import { Label, LabelText } from "./styled";

const FormField = ({ labelText, placeholder, type, name, value, checked, onChange }) => (
  <p>
    <Label type={type}>
      <LabelText>{labelText}:</LabelText>
      <input
        className={`form__field form__field--${type}`}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        defaultChecked={checked}
        autoFocus
        onChange={onChange}
      />
    </Label>
  </p>
)

export default FormField;