import * as React from "react";
import { Title } from "../../atoms/Title";
import { FromTo } from "../../atoms/FromTo";
import "./index.css";
import { SortButton } from "../../atoms/SortButton";
import { CountrySelect } from "../../atoms/CountrySelect";
import { FilterTitlePlot } from "../../atoms/FilterTitlePlot";
import { FilterGenres } from "../../atoms/FilterGenres";

interface IFilterCard {
  onInputSearch?: any;
}
export const FilterCard = ({ onInputSearch }: IFilterCard) => (
  <div className="filter-card">
    <Title className="filter-title title" title="Sort by:" />
    <div className="sort-buttons-container">
      <SortButton title="Raiting" />
      <SortButton title="Year" />
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
