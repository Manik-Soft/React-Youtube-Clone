import React from "react";
import "./Sidebar.css";
import SidebarRow from "../sidebarRow/SidebarRow"
import {Home, Whatshot, Subscriptions} from "@material-ui/icons"

const Sidebar = ({toggle}) => {
  return <div className={toggle ? "sidebar" : "sidebarMini"}>
      <SidebarRow title="Home" Icon={Home} toggle={toggle}/>
      <SidebarRow title="Trending" Icon={Whatshot} toggle={toggle}/>
      <SidebarRow title="Subscriptions" Icon={Subscriptions} toggle={toggle}/>
  </div>;
};

export default Sidebar;
