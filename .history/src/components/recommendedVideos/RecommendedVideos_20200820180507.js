import React, { useState, useEffect } from "react";
import "./RecommendedVideos.css";
import VideoCard from "../videocard/VideoCard";
import Axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

const RecomendedVideos = ({ toggle }) => {
  const [videos, setVideos] = useState([]);
  const KEY = process.env.REACT_APP_FIREBASE_API_KEY;

  useEffect(() => {
    Axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=16&order=rating&relevanceLanguage=en&key=${KEY}`
    ).then((res) => setVideos(res.data.items));
  }, []);

  return (
    <div className={toggle ? "recomendedVideosBig" : "recomendedVideos"}>
      <h2>Recommended</h2>
      <div className="recommendedVideosVideo">
        {videos.map((v) => (
          <Link to={`/video/${v.id?.videoId}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <VideoCard
              key={v.etag}
              image={v.snippet.thumbnails?.medium.url}
              title={v.snippet.title}
              timestamp={format(v.snippet.publishedAt)}
              channel={v.snippet.channelTitle}
              channelImage={v.snippet.thumbnails?.medium.url}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecomendedVideos;
