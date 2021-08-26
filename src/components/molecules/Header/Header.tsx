import * as React from "react";
import "./index.css";
import { SearchLine } from "../../atoms/SearchLine";
import { PageTitle } from "../../atoms/PageTitle";
import { SearchFunnel } from "../../atoms/SearchFunnel";
import { ProfileLine } from "../ProfileLine";

interface IHeader {
  title: string;
  onInputSearch: (searchString:string) => void;
  href?: string;
  value?: string
}
export const Header = ({ title, onInputSearch, value }: IHeader) => (
  <div className="title-line">
    <div className="title-line-right">
      <PageTitle title={title} />
      <SearchLine value={value} onInputSearch={onInputSearch}/>
      <SearchFunnel />
    </div>
    <div className="title-line-left">
      <ProfileLine name="Alexey" />
    </div>
  </div>
);
