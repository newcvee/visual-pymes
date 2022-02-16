import React from "react";
import "./Header.css";
import Logo from "./Logo.png";
import Searchbar from "./Searchbar/Searchbar";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="Logo" />
      <h1>Visual Pymes </h1>
      <nav>
        <Searchbar />
      </nav>
    </div>
  );
};

export default Header;
