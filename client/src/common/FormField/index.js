import React from "react";
import { Label, LabelText, Input } from "./styled";

const FormField = ({ labelText, placeholder, type, name, value, checked, onChange }) => (
  <p>
    <Label type={type}>
      <LabelText>{labelText}:</LabelText>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
    </Label>
  </p>
)

export default FormField;