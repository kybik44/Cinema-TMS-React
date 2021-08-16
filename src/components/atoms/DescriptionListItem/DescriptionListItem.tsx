import * as React from "react";
import "./index.css";

interface IDescriptionListItem {
  name: string;
  value: string | number;
}

export const DescriptionListItem = ({ name, value }: IDescriptionListItem) => (
  <li className="film-description__item">
    <p className="item-name text">{name}</p>
    <p className="item-value text">{value}</p>
  </li>
);
