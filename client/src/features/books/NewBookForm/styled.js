import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 10px;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  border: 2px solid ${({ theme }) => theme.colors.violet};
  border-radius: 20px;
  justify-content: center;
  box-shadow: 0px 0px 5px 2px ${({ theme }) => theme.colors.violet};
`;

export const Legend = styled.legend`
  padding: 10px 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ theme }) => theme.colors.violet};
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ theme }) => theme.colors.violet};
  border: 0px;
  border-radius: 5px;
  margin: 0 auto;
  transition: 0.2s;
  text-transform: uppercase;

  &:hover {
    filter: brightness(110%);
  }
  
  &:active {
    filter: brightness(120%);
  }
`;