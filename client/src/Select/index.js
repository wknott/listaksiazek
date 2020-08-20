import React from "react";
import { StyledSelect } from "./styled";

const Select = ({ name, options, selectedOption }) => (
  <StyledSelect name={name} value={selectedOption}>
    {options.map(option => (
      <option key={option}>{option}</option>
    ))}
  </StyledSelect>
)

export default Select;