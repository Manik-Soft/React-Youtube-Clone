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
  const [channelInfo, setChannelInfo] = useState({});
  const [comments, setComments] = useState([]);
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    Axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${id}&key=${KEY}`
    ).then((res) => setVideoInfo(res.data.items[0]));
  }, []);

  useEffect(() => {
    Axios.get(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=10&videoId=${id}&key=${KEY}`
    ).then((res) => setComments(res.data.items));
    Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&id=${videoInfo.snippet?.channelId}&key=${KEY}`
    ).then((res) => setChannelInfo(res.data.items && res.data.items[0]));
  }, [videoInfo]);

  console.log(channelInfo);

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
          <p className="videoPageTags">
            {videoInfo.snippet?.tags.slice(0, 3).map((v) => (
              <span>#{v} </span>
            ))}
          </p>
          <p className="videoPageTitle">{videoInfo.snippet?.localized?.title}</p>
          <div className="videoPageDetails">
            <p>{videoInfo.statistics?.viewCount} views • {format(videoInfo.snippet?.publishedAt)}</p>
            <div className="videoPageButtons">
              <ThumbUp className="buttonIcon" /> {videoInfo.statistics?.likeCount}
              <ThumbDown className="buttonIcon" /> {videoInfo.statistics?.dislikeCount}
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
              <Avatar src={channelInfo?.snippet?.thumbnails.default.url} />
              <div className="videoPageChannelText">
                <p>{videoInfo.snippet?.channelTitle}</p>
                <span>{channelInfo?.statistics?.subscriberCount} subscribers</span>
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
            {readMore
              ? videoInfo.snippet?.description
              : videoInfo.snippet?.description?.substring(0, 100)}
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
