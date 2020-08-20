import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import { TuneOutlined } from "@material-ui/icons";
import ChannelRow from "../../components/channelRow/ChannelRow";
import VideoRow from "../../components/videoRow/VideoRow";
import { useLocation, Link } from "react-router-dom";
import Axios from "axios";
import { format } from "timeago.js";

const SearchPage = ({ toggle }) => {
  const location = useLocation();
  const q = location.pathname.split("/")[2];
  const KEY = process.env.REACT_APP_FIREBASE_API_KEY;
  const [videos, setVideos] = useState([]);
  const [channel, setChannel] = useState({});

  useEffect(() => {
    Axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&order=relevance&q=${q}&key=${KEY}`
    ).then((res) => {
      setVideos(res.data.items);
    });

    Axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&maxResults=1&order=relevance&q=${q}&key=${KEY}`
    ).then((res) => {
      setChannel(res.data.items[0].snippet);
    });
  }, [location.pathname]);

  return (
    <div className={toggle ? "searchPageBig" : "searchPage"}>
      <div className="searchPageFilter">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image={channel.thumbnails?.medium.url}
        channel={channel.channelTitle}
        verified
        // subs="123K"
        // noOfVideos="151"
        description={channel.description}
      />
      <hr />
      {videos.map((v) => (
        <Link to={`video/${v.id?.videoId}`} style={{color: 'inherit', textDecoration: 'inherit'}}>
          <VideoRow
            key={v.etag}
            // views="1.2M"
            // subs="142K"
            desc={v.snippet.description}
            timestamp={format(v.snippet.publishedAt)}
            channel={v.snippet.channelTitle}
            title={v.snippet.title}
            image={v.snippet.thumbnails.medium.url}
          />
        </Link>
      ))}
    </div>
  );
};

export default SearchPage;
