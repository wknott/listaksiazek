import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #a4508b;
  background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);
`;

export const HeaderContainer = styled.section`
  display: grid;
  grid-template-columns: 70px auto;
  align-items: center;
  grid-gap: 10px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Image = styled.img`
  margin: 10px;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 10px;
  color: white;
`;