import React from "react";
import "./Header.css";
import { Menu, Search, VideoCall, Apps } from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <h1>heyo</h1>
      <Menu />
      <img
        className="headerLogo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png"
        alt="logo"
      />
      <input type="text" />
      <Search />
      <VideoCall />
      <Apps />
    </div>
  );
}

export default Header;
