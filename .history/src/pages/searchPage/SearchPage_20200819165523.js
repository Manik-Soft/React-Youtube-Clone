import React from "react";
import "./SearchPage.css";
import { TuneOutlined } from "@material-ui/icons";

const SearchPage = ({ toggle }) => {
  return (
    <div className={toggle ? "searchPageBig" : "searchPage"}>
      <div className="searchPageFilter">
        <TuneOutlined />
        <h2>Filter</h2>
      </div>
    </div>
  );
};

export default SearchPage;
