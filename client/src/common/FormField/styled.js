import styled, { css } from "styled-components";

export const Label = styled.label`
  padding: 0px 20px;
  display: grid;
  grid-template-columns: 250px 2fr 1fr;
  justify-content: start;
  align-items: center;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
    ${({ type }) => (type === "checkbox" || type === "radio") && css`
      grid-template-columns: 1fr auto;
    `}
  }
`;

export const LabelText = styled.span`
  font-size: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.violet};
  border-radius: 5px;
`;