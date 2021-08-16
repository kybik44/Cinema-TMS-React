import * as React from "react";
import "./index.css";
import searchIcon from "../../../public/images/search-icon.svg";

export const SearchLine = () => (
  <div className="search">
    <input className="search-input" type="search" placeholder="Search" />
    <button className="search-icon">
      <img src={searchIcon} alt="Search icon" />
    </button>
  </div>
);
