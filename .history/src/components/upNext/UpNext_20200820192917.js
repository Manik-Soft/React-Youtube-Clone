import React, { useState, useEffect } from "react";
import "./UpNext.css";
import { MoreVert } from "@material-ui/icons";
import Axios from "axios";
import { format } from "timeago.js";

const UpNext = ({ title,tag }) => {
  const KEY = process.env.REACT_APP_FIREBASE_API_KEY;
  const word = tag ? tag : title?.split(" ")[0]
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${
        word
      }&key=${KEY}`
    ).then((res) => setVideos(res.data.items));
  }, []);

  console.log(videos);

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
        {videos.map((v) => (
          <div className="upNextVideoRow">
            <img
              className="upNextVideoRowImg"
              src={v.snippet?.thumbnails.medium.url}
              alt=""
            />
            <div className="upNextVideoRowInfo">
              <p className="upNextVideoRowTitle">
                {v.snippet?.description}
              </p>
              <p className="upNextVideoRowChannel">{v.snippet?.channelTitle}</p>
              <span>{format(v.snippet?.publishedAt)}</span>
            </div>
            <MoreVert />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpNext;
