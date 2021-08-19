import "./index.css";
import cross from "../../../public/images/cross.svg"
import { useState } from "react";
interface IFilterGenresTag {
    genre: string;
}
export const FilterGenresTag = ({genre}: IFilterGenresTag) => { 
    const [isClicked, setClicked] = useState(false);
    const classArray = ["tag"]
    if(isClicked) classArray.push("hide")
    return (
    <>
    <li className={classArray.join(" ")} title="Добавить тег">{genre} <button className="tag-button" onClick={()=>{setClicked(!isClicked)}}><img src={cross} alt="" /></button></li>
    </>
)};
