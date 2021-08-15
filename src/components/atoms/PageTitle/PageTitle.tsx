import * as React from "react";
import "./index.css";

interface IPageTitle {
  title: string;
}

export const PageTitle = ({ title }: IPageTitle) => (
    <h2 className="page-title">{title}</h2>
);
