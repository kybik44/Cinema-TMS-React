import * as React from "react";
import { SubTitle } from "../SubTitle";
import "./index.css";

interface IFromTo {
    subtitle: string
}
export const FromTo = ({subtitle}: IFromTo) => (
  <div className="filter-from-to">
    <SubTitle subtitle={subtitle} />
    <div className="from-to-container">
    <p className="from-to-text">From</p>
    <input type="text" className="fliter-input small" />
    <p className="from-to-text">To</p>
    <input type="text" className="fliter-input small" />
    </div>
    
  </div>
);
