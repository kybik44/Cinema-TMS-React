import "./index.css";
import cross from "../../../public/images/cross.svg";
import { useState } from "react";
interface IFilterGenresTag {
  genre: string;
  onClickCross: any
}
export const FilterGenresTag = ({ genre,onClickCross }: IFilterGenresTag) => {
    const [clickedTag, setClickedTag] = useState();
    const handlerTag = (tagValue: any) => {
      setClickedTag(tagValue);
      onClickCross(clickedTag)
    };
  return (
    <>
      <li className="tag" title="Добавить тег" data-genre={genre} value={genre}>
      {genre}
        <button
          className="tag-button"
          onClick={(e:any) => {handlerTag(e.target.closest("li").dataset.genre)}}
        >
          <img src={cross} alt="" />
        </button>
      </li>
    </>
  );
};
