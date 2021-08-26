import * as React from "react";
import { useState } from "react";
import { SubTitle } from "../SubTitle";
import "./index.css";
interface IFilterTitlePlot {
  onInputSearch: any;
}
export const FilterTitlePlot = ({ onInputSearch }: IFilterTitlePlot) => {
  const handlerSearch = (targetValue: any) => {  
    onInputSearch(targetValue);
  };
  return (
    <div className="filter-title-plot">
      <SubTitle subtitle="Search in title and plot" />
      <input
        type="text"
        id="title-plot"
        className="fliter-input big"
        onChange={(e: any) => {
          handlerSearch(e.target.value);
        }}
      />
    </div>
  );
};
