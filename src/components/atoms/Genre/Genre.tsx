import * as React from "react";
import { SubTitle } from "../SubTitle";
import "./index.css";

interface IGenre {
    genre: string
    onSelectGenre: any
}
export const Genre = ({genre, onSelectGenre}: IGenre) => (
<a href="" data-genre={genre} onClick={(e:any) => {onSelectGenre(e.target.dataset.genre)}}>{genre}</a>
);
