import React from "react";
import "./Sidebar.css";
import SidebarRow from "../sidebarRow/SidebarRow"
import {Home, Whatshot, Subscriptions} from "@material-ui/icons"

const Sidebar = ({toggle}) => {
  return <div className="sidebar">
      <SidebarRow title="Home" Icon={Home}/>
      <SidebarRow title="Trending" Icon={Whatshot}/>
      <SidebarRow title="Subscriptions" Icon={Subscriptions}/>
  </div>;
};

export default Sidebar;
