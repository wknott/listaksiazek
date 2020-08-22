import React from "react";
import { StyledSelect, Label, LabelText } from "./styled";

const Select = ({ name, options, selectedOption, labelText }) => (
  <p>
    <Label>
      <LabelText>{labelText}:</LabelText>
      <StyledSelect name={name} value={selectedOption}>
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </StyledSelect>
    </Label>
  </p>
)

export default Select;