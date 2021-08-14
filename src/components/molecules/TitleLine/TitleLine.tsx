import * as React from "react";
import "./index.css";
import { SearchLine } from "../../atoms/SearchLine";
import { Title } from "../../atoms/Title";
import { SearchFunnel } from "../../atoms/SearchFunnel";

export const TitleLine = () => (
    <div className="title-line">
    < Title title={"Movie"} />
       <SearchLine />
       <SearchFunnel />
    </div>
  
    
)


