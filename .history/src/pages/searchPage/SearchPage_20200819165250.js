import React from "react";
import "./SearchPage.css";

const SearchPage = ({ toggle }) => {
  return (
    <div className={toggle ? "searchPageBig" : "searchPage"}>
      <h2>Search</h2>
    </div>
  );
};

export default SearchPage;
