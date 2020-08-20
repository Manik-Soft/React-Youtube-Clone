import React from "react";
import "./Sidebar.css";
import SidebarRow from "../sidebarRow/SidebarRow"

const Sidebar = () => {
  return <div className="sidebar">
      <SidebarRow/>
      <SidebarRow/>
      <SidebarRow/>
      <SidebarRow/>
      <SidebarRow/>
      <SidebarRow/>
      <SidebarRow/>
  </div>;
};

export default Sidebar;
