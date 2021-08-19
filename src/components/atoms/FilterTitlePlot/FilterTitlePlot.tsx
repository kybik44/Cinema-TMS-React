import * as React from "react";
import { SubTitle } from "../SubTitle";
import "./index.css";

export const FilterTitlePlot = () => (
  <div className="filter-title-plot">
    <SubTitle subtitle="Search in title and plot" />
    <input type="text" id="title-plot" className="fliter-input big" />
  </div>
);
