import * as React from "react";
import "./index.css";
import searchIcon from "../../../public/images/search-icon.svg";
import { useState } from "react";
interface ISearchLine {
  onClickSearchButton: any;
}
export const SearchLine = ({ onClickSearchButton }: ISearchLine) => {
  const [stringValue, setStringValue] = useState("");
  
  console.log(`current: ${stringValue}`);
  return (
    <div className="search">
      <input
        className="search-input"
        type="search"
        placeholder="Search"
        value={stringValue}
        onInput={(e: any) => setStringValue(e.target.value)}
      />
      <button
        className="search-icon"
        onClick={() => onClickSearchButton(stringValue)}
      >
        <img src={searchIcon} alt="Search icon" />
      </button>
    </div>
  );
};
