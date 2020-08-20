import React from "react";
import "./ChannelRow.css";
import { Avatar } from "@material-ui/core";

const ChannelRow = ({ image, channel, subs, noOfVideos, description }) => {
  return (
    <div className="channelRow">
      <Avatar className="channelRowAvatar" alt={channel} src={image} />
    </div>
  );
};

export default ChannelRow;
