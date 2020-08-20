import React from "react";
import "./UpNext.css";

const UpNext = () => {
  return (
    <div className="upNext">
      <div className="upNextTop">
        <span>UP NEXT</span>
        <input type="checkbox" id="switch" />
        <label for="switch">Toggle</label>
      </div>
    </div>
  );
};

export default UpNext;
