import React from "react";
import "./ChannelRow.css";
import { Avatar } from "@material-ui/core";
import { CheckCircleOutlineOutlined } from "@material-ui/icons";

const ChannelRow = ({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) => {
  return (
    <div className="channelRow">
      <Avatar className="channelRowAvatar" alt={channel} src={image} />
      <div className="channeRowText">
        <h4>
          {channel} {verified && <CheckCircleOutlineOutlined />}
        </h4>
        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
      </div>
    </div>
  );
};

export default ChannelRow;
