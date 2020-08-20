import React from "react";
import "./Sidebar.css";
import SidebarRow from "./sidebarRow/SidebarRow"

const Sidebar = () => {
  return <div className="sidebar">
      <h1>This is the sidebar ⛵ </h1>
      <SidebarRow/>
  </div>;
};

export default Sidebar;
