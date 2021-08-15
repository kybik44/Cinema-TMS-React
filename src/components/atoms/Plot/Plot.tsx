import * as React from "react";
import "./index.css";

interface IPlot {
  text: string;
  isSmallCard: boolean;
}

export const Plot = ({ text, isSmallCard }: IPlot) => (
    <p className={isSmallCard ? "small-film-text text" : "film-text text"}>{text}</p>
);
