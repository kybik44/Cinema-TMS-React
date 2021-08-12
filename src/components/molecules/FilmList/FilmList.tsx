import * as React from "react";
import { IFilm } from "../../../types";
import { FilmCard } from "../../atoms/FilmCard";
import "./index.css";

interface IFilmList {
  films: IFilm[];
}

export const FilmList = ( {films} : IFilmList) => {
  console.log({ films });
  return (
    <div className="user-list">
      {films?.map((film) => (
        <FilmCard key={film.id} {...film} />
      ))} 
    </div>
  );
};