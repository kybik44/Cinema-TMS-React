import * as React from "react";
import "./index.css";
import searchIcon from "../../../public/images/search-icon.svg";
interface ISearchLine {
  value?: string
  onInputSearch: (searchString:string) => void;
}
export const SearchLine = ({ onInputSearch, value }: ISearchLine) => {

  return (
    <div className="search">
      <input
        className="search-input"
        type="search"
        placeholder="Search"
  
        value={value} onChange={(e) => onInputSearch(e.target.value)}
      />
      <button className="search-icon">
        <img src={searchIcon} alt="Search icon" />
      </button>
    </div>
  );
};
