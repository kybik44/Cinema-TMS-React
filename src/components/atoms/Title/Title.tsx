import * as React from "react";
import "./index.css";

interface ITitle {
  title: string;
  className: string;
}

export const Title = ({ title, className }: ITitle) => (
  <h2
    className={className}
  >
    {title}
  </h2>
);
