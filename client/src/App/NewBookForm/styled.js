import styled from "styled-components";

export const Fieldset = styled.fieldset`
  display: flex;
  border: 2px solid #5f0a87;
  border-radius: 20px;
  justify-content: center;
  box-shadow: 0px 0px 5px 2px #5f0a87;
`;

export const Legend = styled.legend`
  padding: 10px 20px;
  text-align: center;
  color: #eee;
  background-color: #5f0a87;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  color: #eee;
  background-color: #5f0a87;
  border: 0px;
  border-radius: 5px;
  margin: 0 auto;
  transition: 0.2s;
  text-transform: uppercase;

  &:hover {
    background-color: hsl(281, 86%, 38%);
  }
  
  &:active {
    background-color: hsl(281, 86%, 48%);
  }
`;