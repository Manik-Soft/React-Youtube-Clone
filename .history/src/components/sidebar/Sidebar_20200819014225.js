import React from "react";
import "./Sidebar.css";
import SidebarRow from "../sidebarRow/SidebarRow"

const Sidebar = () => {
  return <div className="sidebar">
      <SidebarRow title="Home"/>
      <SidebarRow title="Trending"/>
      <SidebarRow title="Subscriptions"/>
  </div>;
};

export default Sidebar;
