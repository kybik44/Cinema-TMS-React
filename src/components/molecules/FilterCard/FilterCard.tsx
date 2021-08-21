import * as React from "react";
import { Title } from "../../atoms/Title";
import { FromTo } from "../../atoms/FromTo";
import "./index.css";
import { SortButton } from "../../atoms/SortButton";
import { CountrySelect } from "../../atoms/CountrySelect";
import { FilterTitlePlot } from "../../atoms/FilterTitlePlot";
import { FilterGenres } from "../../atoms/FilterGenres";
import { ISortSettings } from "../../../types";

interface IFilterCard {
  onInputSearch?: any;
  onClickFilterButton?: any;
  sortSettings: ISortSettings[];
}
export const FilterCard = ({ onInputSearch, onClickFilterButton, sortSettings}: IFilterCard) => (
  <div className="filter-card">
    <Title className="filter-title title" title="Sort by:" />
    <div className="sort-buttons-container">
      <SortButton  onClickFilterButton={onClickFilterButton} sortSettings={sortSettings[0]}/>
      <SortButton  onClickFilterButton={onClickFilterButton} sortSettings={sortSettings[1]}/>
    </div>
    <Title className="filter-title title" title="Filter:" />
    <div className="filter-container">
      <div className="fliter-left-side">
        <CountrySelect />
        <FilterTitlePlot onInputSearch={onInputSearch} />
      </div>
      <div className="fliter-right-side">
        <FromTo subtitle="Years" />
        <FromTo subtitle="Raiting" />
        <FilterGenres />
      </div>
    </div>
  </div>
);
