import React from "react";
import { StyledHeader, HeaderContainer, Image, Title } from "./styled";
import logo from '../logo512.png';

const Header = () => (
  <StyledHeader>
    <HeaderContainer>
      <Image src={logo} alt='logo' width="50" height="50" />
      <Title>Lista książek</Title>
    </HeaderContainer>
  </StyledHeader>
)

export default Header;