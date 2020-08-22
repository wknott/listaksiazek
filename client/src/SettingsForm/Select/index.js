import React from "react";
import { StyledSelect, Label, LabelText } from "./styled";

const Select = ({ name, options, value, onChange, labelText }) => (
  <p>
    <Label>
      <LabelText>{labelText}:</LabelText>
      <StyledSelect name={name} value={value} onChange={onChange}>
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </StyledSelect>
    </Label>
  </p>
)

export default Select;