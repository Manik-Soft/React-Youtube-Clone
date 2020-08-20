import React from "react";
import "./VideoRow.css";

const VideoRow = ({ views, subs, desc, timestamp, channel, title, image }) => {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRowText">
        <h3>{title}</h3>
        <p>
          {channel} • {subs} Subscribers • {views} views • {timestamp}
        </p>
      </div>
    </div>
  );
};

export default VideoRow;
