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
        <div className="videoContainer">
          <iframe
            className="embedVideo"
            src="https://www.youtube.com/embed/0c_pVWkSdLU"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="videoPageVideoInfo">
          <p className="videoPageTags">#fun #comedy #meme</p>
          <p className="videoPageTitle">
            memes that make you realize 2021 is 4 months away
          </p>
          <div className="videoPageDetails">
            <p>25,358 views • Aug 19, 2020</p>
            <div className="videoPageButtons">
                <div>
                <ThumbUp /> 4K
                </div>
              
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
