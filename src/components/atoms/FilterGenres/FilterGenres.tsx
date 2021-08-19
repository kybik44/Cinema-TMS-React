import * as React from "react";
import { SubTitle } from "../SubTitle";
import "./index.css";
import { useState } from "react";
import { FilterGenresTag } from "../FilterGenresTag";
import { Genre } from "../Genre";

export const FilterGenres = () => {
  
  const [dropButtonClicked, setDropDownStatus] = useState(false);
  const handleDropDownStatus = () => {
    setDropDownStatus(!dropButtonClicked)
  }
  const genresArray = ["Adventure", "Fantasy", "Drama"]
  const [currentGenresArray, setCurrentGenresArray] = useState(genresArray)
  const [crossClicked, setCrossClicked] = useState(false)
  const handleCrossClick = (tagValue:string) => {
    setCrossClicked(!crossClicked)
    deleteTag(tagValue)
  }
  const deleteTag = (tagValue:string) => {
      if(genresArray.includes(tagValue)){
        return setCurrentGenresArray(currentGenresArray.filter(genre => !(genre === tagValue)))
      }
  }
  let dropContentClass = "dropdown-content"
  if(dropButtonClicked) dropContentClass += " active"
  const handlerGenre = (targetGenre:string) => {
    if(!currentGenresArray.includes(targetGenre)){
        setCurrentGenresArray([...currentGenresArray, targetGenre])
    }
    
  }
  return (
    <div className="filter-genres">
      <SubTitle subtitle="Genres" />
      <div className="filter-genres-tags">
        <ul className="primary_tags">
          {currentGenresArray.map((genre, index) => {
            return <FilterGenresTag key={index} genre={genre} onClickCross={handleCrossClick}/>;
          })}
        </ul>
        <div className="dropdown-genres">
          <button
            className="dropbtn"
            onClick={handleDropDownStatus}
          >
            add
          </button>
          <div
            className={dropContentClass}
            onMouseLeave={handleDropDownStatus}
          >
              {genresArray.map((genre, index) => {
            return <Genre key={index} genre={genre} onSelectGenre={handlerGenre}/>;
          })}
          </div>
        </div>
      </div>
    </div>
  );
};
