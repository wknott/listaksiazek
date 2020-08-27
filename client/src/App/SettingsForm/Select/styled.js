import styled from "styled-components";

export const Label = styled.label`
  padding: 0px 20px;
  display: grid;
  grid-template-columns: 250px 2fr 1fr;
  justify-content: start;
  align-items: center;
  grid-gap: 20px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;

export const LabelText = styled.span`
  font-size: 20px;
`;

export const StyledSelect = styled.select`
  padding: 10px;
  border: 2px solid #5f0a87;
  border-radius: 5px;
`;