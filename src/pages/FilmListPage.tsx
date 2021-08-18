import React, { Fragment, useState } from "react";
import { Header } from "../components/molecules/Header";
import { SmallFilmCard } from "../components/molecules/SmallFilmCard";
import { films as movies } from "../mock";
import { IFilm } from "../types";

export const FilmListPage = () => {
  const [films, setFilms] = useState(movies);
  const searchFilm = (filmsArray: IFilm[], searchString: string) => {
    return filmsArray.filter((film) =>
      film.title.toLowerCase().includes(searchString.toLowerCase())
    );
  };

  const handlerFilms = (searchString: string) => {
    console.log("Работает");
    setFilms(searchFilm(movies, searchString));
  };

  return (
    <Fragment>
      <Header title="Movies" onClickSearchButton={handlerFilms} />
      <div className="small-card-list">
        {films.map((film) => {
          return <SmallFilmCard key={film.id} {...film} />;
        })}
      </div>
    </Fragment>
  );
};
