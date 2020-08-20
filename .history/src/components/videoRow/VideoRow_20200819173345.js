import React from "react";
import "./VideoRow.css";

const VideoRow = ({ views, subs, desc, timestamp, channel, title, image }) => {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRowText">{title}</div>
    </div>
  );
};

export default VideoRow;
