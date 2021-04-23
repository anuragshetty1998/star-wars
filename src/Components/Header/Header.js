import React from "react";
import logo from "../Firstpage/Images/logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Star Wars" className="header-img" />
    </div>
  );
}

export default Header;
