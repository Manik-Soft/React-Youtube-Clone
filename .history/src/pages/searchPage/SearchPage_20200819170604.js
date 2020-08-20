import React from "react";
import "./SearchPage.css";
import { TuneOutlined } from "@material-ui/icons";
import ChannelRow from "../../components/channelRow/ChannelRow"

const SearchPage = ({ toggle }) => {
  return (
    <div className={toggle ? "searchPageBig" : "searchPage"}>
      <div className="searchPageFilter">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image=""
        channel=""
        verified="true"
        subs="123K"
        noOfVideos="151"
        description=""
      />
    </div>
  );
};

export default SearchPage;
