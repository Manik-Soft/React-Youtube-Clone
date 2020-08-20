import React from "react";
import "./SearchPage.css";
import { TuneOutlined } from "@material-ui/icons";
import ChannelRow from "../../components/channelRow/ChannelRow";
import VideoRow from "../../components/videoRow/VideoRow";

const SearchPage = ({ toggle }) => {
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
      <VideoRow
        views="1.2M"
        subs="142K"
        desc="Ibiza Summer Mix 2020 Best Of Tropical Deep House Music Chill Out Mix By Deep Legacy "
        timestamp="2 days ago"
        channel="Deep Legacy"
        title="Ibiza Summer Mix"
        image="https://i.ytimg.com/vi/m3nNfLWotXg/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAXQH-4p31VI5O3bhwTG3NDsc2TvA"
      />
    </div>
  );
};

export default SearchPage;
