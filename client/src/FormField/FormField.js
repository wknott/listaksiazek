import React from "react";
import { Label, LabelText, Input } from "./styled";

const FormField = ({ labelText, placeholder, type, name, value, checked, onChange, disabled }) => (
  <p>
    <Label type={type}>
      <LabelText>{labelText}:</LabelText>
      <Input
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