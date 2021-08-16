import * as React from "react";
import "./index.css";
import { SearchLine } from "../../atoms/SearchLine";
import { PageTitle } from "../../atoms/PageTitle";
import { SearchFunnel } from "../../atoms/SearchFunnel";
import { ProfileLine } from "../ProfileLine";
interface IHeader {
  title: string;
}
export const Header = ({ title }: IHeader) => (
  <div className="title-line">
    <div className="title-line-right">
      <PageTitle title={title} />
      <SearchLine />
      <SearchFunnel />
    </div>
    <div className="title-line-left">
      <ProfileLine name="Alexey" />
    </div>
  </div>
);
