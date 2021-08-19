import * as React from "react";
import "./index.css";

interface ISubTitle {
  subtitle: string;
}

export const SubTitle = ({ subtitle }: ISubTitle) => (
  <h3 className="subtitle">{subtitle}</h3>
);
