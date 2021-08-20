import * as React from "react";
import "./index.css";


interface ISortButton {
    title:String;
    onClickFilterButton: any;
}
export const SortButton = ({title,onClickFilterButton}:ISortButton) => {
  
  const [isClicked, setClicked] = React.useState(true);
  return (    
    <button className={isClicked ? "sort-button" : "sort-button active"} onClick={onClickFilterButton}>{title}</button>
)};

