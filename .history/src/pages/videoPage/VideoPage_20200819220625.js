import React, { useEffect, useState } from "react";
import "./VideoPage.css";
import { useLocation } from "react-router-dom";
import Axios from "axios";
import {
  ThumbUp,
  ThumbDown,
  Reply,
  PlaylistAdd,
  MoreHoriz,
} from "@material-ui/icons";

const VideoPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const KEY = process.env.REACT_APP_FIREBASE_API_KEY;
  const [videoInfo, setVideiInfo] = useState({});

  //   useEffect(() => {
  //     Axios.get(
  //       `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${KEY}`
  //     ).then((res) => setVideiInfo(res.data.items[0].snippet));
  //   }, []);

  return (
    <div className="videoPage">
      <div className="videoPageLeft">
        <iframe
          class="embedded-video-16-9"
          src="https://www.youtube.com/embed/_TyJeKKQh-s?controls=0"
          frameborder="0"
          allowfullscreen=""
        ></iframe>
        <div className="videoPageVideoInfo">
          <span className="videoPageTags">#fun, #comedy, #meme</span>
          <span className="videoPageTitle">
            memes that make you realize 2021 is 4 months away
          </span>
          <div className="videoPageDetails">
            <p>25,358 views•Aug 19, 2020</p>
            <div className="videoPageButtons">
              <ThumbUp /> 4K
              <ThumbDown /> 57
              <Reply /> SHARE
              <PlaylistAdd /> SAVE
              <MoreHoriz />
            </div>
          </div>
        </div>
      </div>
      <div className="videoPageRight">dasd</div>
    </div>
  );
};

export default VideoPage;
