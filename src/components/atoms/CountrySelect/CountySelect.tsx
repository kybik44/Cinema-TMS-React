import * as React from "react";
import { SubTitle } from "../SubTitle";
import "./index.css";

export const CountrySelect = () => (
    <div className="filter-countries">
    <SubTitle subtitle="Countries" />
    <input type="select" id="countries" className="fliter-input big" />
  </div>
);
