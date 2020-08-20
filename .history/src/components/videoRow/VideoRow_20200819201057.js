import React from "react";
import "./VideoRow.css";

const VideoRow = ({ views, subs, desc, timestamp, channel, title, image }) => {
  return (
    <div className="videoRow">
      <div className="videoRowText">
        <h3>{title}</h3>
        <p className="videoRowHeadline">
          {channel}  • {timestamp}
        </p>
        <p className="videoRowDesc">{desc}</p>
      </div>
    </div>
  );
};

export default VideoRow;
