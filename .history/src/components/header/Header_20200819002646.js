import React from "react";
import "./Header.css";
import { Menu } from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <h1>heyo</h1>
      <Menu />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png"
        alt="logo"
      />
    </div>
  );
}

export default Header;
