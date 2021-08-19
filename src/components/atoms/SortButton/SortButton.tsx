import * as React from "react";
import "./index.css";


interface ISortButton {
    title:String;
}
export const SortButton = ({title}:ISortButton) => {
  const [isClicked, setClicked] = React.useState(true);
  
  return (    
    <button className={isClicked ? "sort-button" : "sort-button active"} onClick={()=>{setClicked(!isClicked)}}>{title}</button>
)};

