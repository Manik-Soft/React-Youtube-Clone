import React, { useState } from "react";
import "./Header.css";
import {
  Menu,
  Search,
  VideoCall,
  Apps,
  Notifications,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header({ toggle, setToggle }) {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="headerLeft">
        <Menu classname="headerLeftToogle" onClick={() => setToggle(!toggle)} />
        <Link to="/">
          <img
            className="headerLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="headerInput">
        <input
          type="text"
          placeholder="Search"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Link to={`/search/${inputSearch}`}>
          <Search className="headerInputButton" />
        </Link>
      </div>
      <div className="headerRight">
        <VideoCall className="headerRightItem"/>
        <Apps  className="headerRightItem"/>
        <Notifications  className="headerRightItem"/>
        <Avatar
          alt="Safak Kocaoglu"
          src="https://avatars2.githubusercontent.com/u/1486366?s=460&u=e8efaf0d63842b11771391988d38139a2b631f05&v=4"
        />
      </div>
    </div>
  );
}

export default Header;
