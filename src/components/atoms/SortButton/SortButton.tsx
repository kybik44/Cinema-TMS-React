import * as React from "react";
import { useState } from "react";
import { ISortSettings } from "../../../types";
import "./index.css";


interface ISortButton {
    onClickFilterButton: any;
    sortSettings: ISortSettings;
}
export const SortButton = ({onClickFilterButton, sortSettings}:ISortButton) => {
  const [btnClicked, setBtnClicked] = useState(true)
  const handlerFilterButton = (field:string, isClicked:boolean) => {
    setBtnClicked(!btnClicked)
    onClickFilterButton(field, isClicked);
  }
  return (    
    <button className={sortSettings.active ? "sort-button active" : "sort-button"} onClick={()=>{handlerFilterButton(sortSettings.field, btnClicked)}}>{sortSettings.fieldName}</button>
)};

