import React from "react";
import "./SearchPage.css";
import { TuneOutlined } from "@material-ui/icons";

const SearchPage = ({ toggle }) => {
  return (
    <div className={toggle ? "searchPageBig" : "searchPage"}>
      <div className="searchPageFilter">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr/>
    </div>
  );
};

export default SearchPage;
