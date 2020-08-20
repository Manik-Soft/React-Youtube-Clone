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
  NotificationsNone,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

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
              <ThumbUp className="buttonIcon" /> 4K
              <ThumbDown className="buttonIcon" /> 57
              <Reply className="buttonIcon" /> SHARE
              <PlaylistAdd className="buttonIcon" /> SAVE
              <MoreHoriz className="buttonIcon" />
            </div>
          </div>
        </div>
        <hr />
        <div className="videoPageDesc">
          <div className="videoPageChannel">
            <div className="videoPageChannelInfo">
              <Avatar src="https://yt3.ggpht.com/a/AATXAJzfwVhWA-oUC9C4N7and106qzQQrCzMge3RXjCKwQ=s88-c-k-c0xffffffff-no-rj-mo" />
              <div className="videoPageChannelText">
                <p>MemerMan</p>
                <span>1.16M subscribers</span>
              </div>
            </div>
            <div className="videoPageSubsInfo">
              <button><span>SUBSCRIBE</span></button>
              <NotificationsNone color="gray"/>
            </div>
          </div>
          <div className="videoPageVideoDesc"></div>
        </div>
      </div>
      <div className="videoPageRight">dasd</div>
    </div>
  );
};

export default VideoPage;
