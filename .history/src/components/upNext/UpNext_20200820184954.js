import React from "react";
import "./UpNext.css";

const UpNext = () => {
  return (
    <div className="upNext">
      <div className="upNextTop">
        <span>UP NEXT</span>
            AUTOPLAY
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default UpNext;
