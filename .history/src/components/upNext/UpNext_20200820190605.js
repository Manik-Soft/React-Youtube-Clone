import React from "react";
import "./UpNext.css";
import {
    MoreVert
  } from "@material-ui/icons";

const UpNext = () => {
  return (
    <div className="upNext">
      <div className="upNextTop">
        <span>UP NEXT</span>
        <div className="autoPlay">
          AUTOPLAY
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="upNextVideos">
        <div className="upNextVideoRow">
          <img
            className="upNextVideoRowImg"
            src="https://blog.beactivetv.pl/wp-content/uploads/2019/07/sean-o-KMn4VEeEPR8-unsplash-1.jpg"
            alt=""
          />
          <div className="upNextVideoRowInfo">
              <p className="upNextVideoRowTitle">Summer Mix 2020</p>
              <p className="upNextVideoRowChannel">Chill your mind</p>
              <span>3.7M views . 1 year ago</span>
          </div>
          <MoreVert/>
        </div>
      </div>
    </div>
  );
};

export default UpNext;
