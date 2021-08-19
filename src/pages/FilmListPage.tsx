import React, { Fragment, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "../components/molecules/Header";
import { SmallFilmCard } from "../components/molecules/SmallFilmCard";
import { films as movies } from "../mock";
import { IFilm } from "../types";
import { FilterPage } from "./FilterPage";

export const FilmListPage = () => {
  const [films, setFilms] = useState(movies);
  const searchFilm = (filmsArray: IFilm[], searchString: string) => {
    return filmsArray.filter((film) =>
      film.title.toLowerCase().includes(searchString.toLowerCase())
    );
  };

  const handlerFilms = (searchString: string) => {
    if (searchString.length >= 2) {
      setFilms(searchFilm(movies, searchString));
    }
  };

  return (

    <Fragment>
      <Header title="Movies" onInputSearch={handlerFilms} />
      <div className="small-card-list">
        {films.map((film) => {
          return <SmallFilmCard key={film.id} {...film} />;
        })}
      </div>
    </Fragment>

  );
};
