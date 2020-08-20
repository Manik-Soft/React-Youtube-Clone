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
  const [comments, setComments] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const [desc, setDesc] = useState(
    "Copyright Disclaimer Under Section 107 of the Copyright Act 1976 allowance is made for  fair use for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use."
  );

    useEffect(() => {
      Axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${KEY}`
      ).then((res) => setVideiInfo(res.data.items[0].snippet));
    }, []);

  useEffect(() => {
    Axios.get(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=10&videoId=${id}&key=${KEY}`
    ).then((res) => setComments(res.data.items));
  }, [videoInfo]);

  console.log(comments[0].snippet?.topLevelComment)

  return (
    <div className="videoPage">
      <div className="videoPageLeft">
        <div className="videoContainer">
          <iframe
            className="embedVideo"
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
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
              <button>
                <span>SUBSCRIBE</span>
              </button>
              <NotificationsNone className="videoPageBell" />
              <MoreHoriz className="videoPageMore" />
            </div>
          </div>
          <div className="videoPageVideoDesc">
            {readMore ? desc : desc.substring(0, 100)}
            <p className="showMore" onClick={() => setReadMore(!readMore)}>
              SHOW MORE
            </p>
          </div>
        </div>
        <hr />
        <div className="commentsSection">
          <div className="commentRow">
            <Avatar src="https://yt3.ggpht.com/a/AATXAJxubEzTCpIF_x5EyC5UVc-st6D1u6AEIIKjoiTLjg=s48-c-k-c0xffffffff-no-rj-mo" />
            <div className="commentInfo">
              <span className="commentRowName">Aeron</span> <span className="commentRowTime">10 months ago</span>
              <p className="commentRowDesc">
                Hooks are a new addition in React that lets you use state and
                other React features without writing a class.{" "}
              </p>
            </div>
          </div>
          <div className="commentRow">
            <Avatar src="https://yt3.ggpht.com/a/AATXAJxubEzTCpIF_x5EyC5UVc-st6D1u6AEIIKjoiTLjg=s48-c-k-c0xffffffff-no-rj-mo" />
            <div className="commentInfo">
              <span className="commentRowName">Aeron</span> <span className="commentRowTime">10 months ago</span>
              <p className="commentRowDesc">
                Hooks are a new addition in React that lets you use state and
                other React features without writing a class.{" "}
              </p>
            </div>
          </div>
          <div className="commentRow">
            <Avatar src="https://yt3.ggpht.com/a/AATXAJxubEzTCpIF_x5EyC5UVc-st6D1u6AEIIKjoiTLjg=s48-c-k-c0xffffffff-no-rj-mo" />
            <div className="commentInfo">
              <span className="commentRowName">Aeron</span> <span className="commentRowTime">10 months ago</span>
              <p className="commentRowDesc">
                Hooks are a new addition in React that lets you use state and
                other React features without writing a class.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="videoPageRight">dasd</div>
    </div>
  );
};

export default VideoPage;
