import React, { useState,useEffect } from "react";
import "./UpNext.css";
import { MoreVert } from "@material-ui/icons";
import Axios from "axios";

const UpNext = ({title}) => {

  const KEY = process.env.REACT_APP_FIREBASE_API_KEY;
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${title?.split(" ")[0]}&key=${KEY}`
    ).then((res) => setVideos(res.data.items));
  }, []);

  console.log(videos)

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
            <p className="upNextVideoRowTitle">
              Ibiza Summer Mix 2020 Best Of Tropical Deep House Music Chill Out
              Mix By Deep Legacy #87
            </p>
            <p className="upNextVideoRowChannel">Chill your mind</p>
            <span>3.7M views . 1 year ago</span>
          </div>
          <MoreVert />
        </div>
      </div>
    </div>
  );
};

export default UpNext;
