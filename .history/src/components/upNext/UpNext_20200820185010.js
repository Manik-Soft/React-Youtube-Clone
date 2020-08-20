import React from "react";
import "./UpNext.css";

const UpNext = () => {
  return (
    <div className="upNext">
      <div className="upNextTop">
        <span>UP NEXT</span>
        <div>
          AUTOPLAY
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default UpNext;
