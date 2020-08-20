import React from "react";
import "./VideoCard.css";

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
      <img src={image} alt="" />
      <div className="videoInfo"></div>
    </div>
  );
};

export default VideoCard;
