import React from "react";
import "./Sidebar.css";
import SidebarRow from "../sidebarRow/SidebarRow"
import {Home} from "@material-ui/icons"

const Sidebar = () => {
  return <div className="sidebar">
      <SidebarRow title="Home" icon={Home}/>
      <SidebarRow title="Trending"/>
      <SidebarRow title="Subscriptions"/>
  </div>;
};

export default Sidebar;
