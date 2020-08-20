import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import { TuneOutlined } from "@material-ui/icons";
import ChannelRow from "../../components/channelRow/ChannelRow";
import VideoRow from "../../components/videoRow/VideoRow";
import { useLocation } from "react-router-dom";
import Axios from "axios";

const SearchPage = ({ toggle }) => {
  const location = useLocation();
  const q = location.pathname.split("/")[2];
  const KEY = process.env.REACT_APP_YOUTUBE_API_KEY
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&q=${q}&key=${KEY}`
    ).then(res=>console.group(res));
  }, []);

  return (
    <div className={toggle ? "searchPageBig" : "searchPage"}>
      <div className="searchPageFilter">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJwb4il5ywsy3ibr6KOcw40OErCNvbw1-MI7LywQ=s144-c-k-c0xffffffff-no-rj-mo"
        channel="Quiet Quest"
        verified
        subs="123K"
        noOfVideos="151"
        description="Welcome to a place where you can come to relax, let your problems go and enter a deep state of peace and tranquility. We hope that our music can bring you happiness and joy as well as a sense of serenity and well-being."
      />
      <hr />
      {/* <VideoRow
        views="1.2M"
        subs="142K"
        desc="Ibiza Summer Mix 2020 Best Of Tropical Deep House Music Chill Out Mix By Deep Legacy "
        timestamp="2 days ago"
        channel="Deep Legacy"
        title="Ibiza Summer Mix"
        image="https://i.ytimg.com/vi/m3nNfLWotXg/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAXQH-4p31VI5O3bhwTG3NDsc2TvA"
      />
      <VideoRow
        views="123B"
        subs="44K"
        desc="Subscribe to our Channel: https://www.youtube.com/channel/UCPaLi5xEyzuffjwXHJfeBJQ?sub_confirmation=1 Listen to all our ..."
        timestamp="1 days ago"
        channel="Pete Belliis"
        title="Deep House 2020"
        image="https://i.ytimg.com/vi/NU0YwcemOl4/hqdefault_live.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBXcmjIm-fed7HfRW1BpJdgSNOpvw"
      />
      <VideoRow
        views="12M"
        subs="839K"
        desc="Ozuna x Karol G x Myke Towers - Caramelo Remix (Video Oficial) #Ozuna #KarolG #CarameloRemix Escúchala en tu plataforma ..."
        timestamp="2 days ago"
        channel="Ozuna"
        title="Ozuna x Karol G x Myke Towers - Caramelo Remix"
        image="https://i.ytimg.com/vi/RfWUVH11UYA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAuz-1WmvZNVtAEhDjgRniUh75lXQ"
      />
      <VideoRow
        views="6.1M"
        subs="98K"
        desc="Play it on Repeat. Masterpiece from the one and only Kygo. Kygo - Piano Jam 1-2-3 Want to submit your music and have it ..."
        timestamp="2 years ago"
        channel="REPEAT IT"
        title="Kygo - Piano Jam For Studying and Sleeping[1 HOUR] [2020]"
        image="https://i.ytimg.com/vi/c_iRx2Un07k/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC49oOgG6YlnwsOJ1-iEQU55csetA"
      />
      <VideoRow
        views="1.9M"
        subs="36M"
        desc="Listen to ChilledCow on Spotify, Apple music and more → https://bit.ly/chilledcow-playlists Check out the ChilledCow merch ..."
        timestamp="3 years ago"
        channel="ChilledCow"
        title="Lofi hip hop mix - Beats to Relax/Study to"
        image="https://i.ytimg.com/vi/5qap5aO4i9A/maxresdefault.jpg"
      />
      <VideoRow
        views="7.8M"
        subs="21K"
        desc="Classical Music for Studying & Brain Power | Mozart, Vivaldi"
        timestamp="1 year ago"
        channel="HALIDON"
        title="Classical Music for Studying & Brain Power | Mozart, Vivaldi"
        image="https://i.ytimg.com/vi/BMuknRb7woc/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCPk4lLdeinRAfKojPK67RzNtmvsg"
      />
      <VideoRow
        views="110K"
        subs="2K"
        desc="We want to thank everyone for the continuous support and most importantly for spreading the word about Progressive House music."
        timestamp="2 months ago"
        channel="The Grand Sound"
        title="♫ Best Progressive House Mix 2020 Vol. #4 ♫"
        image="https://i.ytimg.com/vi/h3uJKEDsyCM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBAdJNg2LfZRk3nztqiIcAm5n1YRQ"
      />
      <VideoRow
        views="612K"
        subs="12K"
        desc="Spotify Playlists : spotify:user:6qxhced3b0l62lh3fedtbv14y ______ Artwork by Roxie Scroggs ..."
        timestamp="11 months ago"
        channel="Dreamy"
        title="Guitar mix | Lofi HipHop"
        image="https://i.ytimg.com/vi/3MxicuAGoxQ/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC8_sYxNgnFUWt1m6LcPZFq9zIoVw"
      /> */}
    </div>
  );
};

export default SearchPage;
