import React from "react";
import "./Sidebar.css";
import SidebarRow from "../sidebarRow/SidebarRow"
import {Home} from "@material-ui/icons"

const Sidebar = () => {
  return <div className="sidebar">
      <SidebarRow title="Home" Icon={Home}/>
      <SidebarRow title="Trending" Icon={Home}/>
      <SidebarRow title="Subscriptions" Icon={Home}/>
  </div>;
};

export default Sidebar;
