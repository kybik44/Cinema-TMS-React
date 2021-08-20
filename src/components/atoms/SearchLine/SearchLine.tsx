import * as React from "react";
import "./index.css";
import searchIcon from "../../../public/images/search-icon.svg";
import { useState } from "react";
interface ISearchLine {
  onInputSearch: any;
}
export const SearchLine = ({ onInputSearch }: ISearchLine) => {
  const [stringValue, setStringValue] = useState("");
  const handlerSearch = (targetValue: any) => {
    setStringValue(targetValue);
    onInputSearch(stringValue);
  };
  return (
    <div className="search">
      <input
        className="search-input"
        type="search"
        placeholder="Search"
        value={stringValue}
        onChange={(e: any) => {
          handlerSearch(e.target.value);
        }}
      />
      <button className="search-icon">
        <img src={searchIcon} alt="Search icon" />
      </button>
    </div>
  );
};
