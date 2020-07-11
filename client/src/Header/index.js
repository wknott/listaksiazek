import React from "react";
import "./styles.css";
import logo from '../logo512.png';

const Header = () => (
  <header className="header">
    <img className="header__image" src={logo} alt='logo' width="50" height="50" />
    <h1 className="header__title">Lista książek</h1>
  </header>
)

export default Header;