import React from "react";
import "./VideoCard.css";
import { Avatar } from "@material-ui/core";

const VideoCard = ({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) => {
  return (
    <div className="videoCard">
      <img className="videoCardThumbnail" src={image} alt="" />
      <div className="videoCardInfo">
        <Avatar className="VideoCardAvatar" alt={channel} src={channelImage} />
        <div className="videoCardText">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
