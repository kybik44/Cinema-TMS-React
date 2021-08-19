import * as React from "react";
import { useState } from "react";
import { SubTitle } from "../SubTitle";
import "./index.css";
interface IFilterTitlePlot {
  onInputSearch: any;
}
export const FilterTitlePlot = ({ onInputSearch }: IFilterTitlePlot) => {
  const [stringValue, setStringValue] = useState("");
  const handlerSearch = (targetValue: any) => {
    setStringValue(targetValue);
    onInputSearch(stringValue);
  };
  return (
    <div className="filter-title-plot">
      <SubTitle subtitle="Search in title and plot" />
      <input
        type="text"
        id="title-plot"
        className="fliter-input big"
        onInput={(e: any) => {
          handlerSearch(e.target.value);
        }}
      />
    </div>
  );
};
