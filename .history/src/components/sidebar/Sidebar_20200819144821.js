import React from "react";
import "./Sidebar.css";
import SidebarRow from "../sidebarRow/SidebarRow";
import {
  Home,
  Whatshot,
  Subscriptions,
  VideoLibrary,
  History,
  OndemandVideo,
  WatchLater,
  ThumbUpAltOutlined,
  ExpandMoreOutlined,
} from "@material-ui/icons";

const Sidebar = ({ toggle }) => {
  return (
    <div className={toggle ? "sidebarMini" : "sidebar"}>
      <SidebarRow selected title="Home" Icon={Home} toggle={toggle} />
      <SidebarRow title="Trending" Icon={Whatshot} toggle={toggle} />
      <SidebarRow title="Subscriptions" Icon={Subscriptions} toggle={toggle} />
      <hr />
      <SidebarRow title="Library" Icon={VideoLibrary} toggle={toggle} />
      <SidebarRow title="History" Icon={History} toggle={toggle} />
      <SidebarRow title="Your videos" Icon={OndemandVideo} toggle={toggle} />
      <SidebarRow title="Watch later" Icon={WatchLater} toggle={toggle} />
      <SidebarRow title="Liked videos" Icon={ThumbUpAltOutlined} toggle={toggle} />
      <SidebarRow title="Show more" Icon={ExpandMoreOutlined} toggle={toggle} />
      <hr />
    </div>
  );
};

export default Sidebar;
