import * as React from "react";
import { SubTitle } from "../SubTitle";
import "./index.css";
import ReactDOM from "react-dom";
import { useState } from "react";
import { FilterGenresTag } from "../FilterGenresTag";

export const FilterGenres = () => {
  const genresArray = ["Adventure", "Fantasy", "Drama"];
  const [btnClick, setBtnClick] = useState(false);

  return (
    <div className="filter-genres">
      <SubTitle subtitle="Genres" />
      <div className="filter-genres-tags">
        <ul className="primary_tags">
          {genresArray.map((genre, index) => {
            return <FilterGenresTag key={index} genre={genre}/>;
          })}
        </ul>
        <div className="dropdown-genres">
          <button
            className="dropbtn"
            onClick={() => {setBtnClick(!btnClick)}}
          >
            add
          </button>
          <div
            className={ btnClick ? "dropdown-content active" : "dropdown-content" }
            onMouseLeave={() => {setBtnClick(!btnClick)}}
          >
            <a href="#">Fantasy</a>
            <a href="#">Drama</a>
            <a href="#">Adventure</a>
          </div>
        </div>
      </div>
    </div>
  );
};
