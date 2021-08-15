import * as React from "react";
import "./index.css";

interface ITitle {
  title: string;
  isSmallCard: boolean;
}

export const Title = ({ title, isSmallCard }: ITitle) => <h2 className={isSmallCard ? "small-card-title title" : "big-card-title title"}>{title}</h2>;
