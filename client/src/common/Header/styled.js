import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.pink};
  background-image: linear-gradient(326deg, ${({ theme }) => theme.colors.pink} 0%, ${({ theme }) => theme.colors.violet} 74%);
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