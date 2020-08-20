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
import { format } from "timeago.js";

const VideoPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const KEY = process.env.REACT_APP_FIREBASE_API_KEY;
  const [videoInfo, setVideoInfo] = useState({});
  const [comments, setComments] = useState([]);
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    Axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${KEY}`
    ).then((res) => setVideoInfo(res.data.items[0].snippet));
  }, []);

  useEffect(() => {
    Axios.get(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=10&videoId=${id}&key=${KEY}`
    ).then((res) => setComments(res.data.items));
  }, [videoInfo]);

  console.log(videoInfo);

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
          <p className="videoPageTags">{videoInfo.tags?.slice(0,3).map(v=>(
            <span>#{v} </span>
          ))}</p>
          <p className="videoPageTitle">
          {videoInfo.localized?.title}
          </p>
          <div className="videoPageDetails">
            <p>25,358 views • {videoInfo.publishedAt}</p>
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
                <p>{videoInfo.channelTitle}</p>
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
            {readMore ? videoInfo.description : videoInfo.description?.substring(0, 100)}
            <p className="showMore" onClick={() => setReadMore(!readMore)}>
              SHOW MORE
            </p>
          </div>
        </div>
        <hr />
        <div className="commentsSection">
          {comments.map((c) => (
            <div className="commentRow">
              <Avatar
                src={c.snippet?.topLevelComment.snippet.authorProfileImageUrl}
              />
              <div className="commentInfo">
                <span className="commentRowName">
                  {c.snippet?.topLevelComment.snippet.authorDisplayName}
                </span>{" "}
                <span className="commentRowTime">
                  {format(c.snippet?.topLevelComment.snippet.publishedAt)}
                </span>
                <p
                  className="commentRowDesc"
                  dangerouslySetInnerHTML={{
                    __html: c.snippet?.topLevelComment.snippet.textDisplay,
                  }}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="videoPageRight">dasd</div>
    </div>
  );
};

export default VideoPage;
