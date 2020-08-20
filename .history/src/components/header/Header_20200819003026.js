import React from "react";
import "./Header.css";
import {
  Menu,
  Search,
  VideoCall,
  Apps,
  Notifications,
} from "@material-ui/icons";
import Avatar from "@material-ui/core";

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
      <Notifications />
      <Avatar
        alt="Safak Kocaoglu"
        src="https://avatars2.githubusercontent.com/u/1486366?s=460&u=e8efaf0d63842b11771391988d38139a2b631f05&v=4"
      />
    </div>
  );
}

export default Header;
