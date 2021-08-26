import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/molecules/Header";
import { SmallFilmCard } from "../components/molecules/SmallFilmCard";
import { films as movies } from "../mock";
import { IFilm } from "../types";
export const searchFilm = (filmsArray: IFilm[], searchString: string) => {
  return filmsArray.filter((film) =>
    film.title.toLowerCase().includes(searchString.toLowerCase())
  );
};
export const FilmListPage = () => {
  const [filteredFilms, setFilms] = useState(movies);
  const [searchString, setSearchString] = useState('')
 

  const handlerFilms = (searchString: string) => {
    setSearchString(searchString)
    if (searchString.length >= 3) {
      setFilms(searchFilm(movies, searchString));
    }
    if (!searchString.length) {
      setFilms(movies);
    }
  };
  return (
    <Fragment>
      <Header value = {searchString} title="Movies" onInputSearch={handlerFilms} />
      <div className="small-card-list">
        {filteredFilms.map((movie) => {
          return (
            <Link to={`/filmList/${movie.id}`}>
              <SmallFilmCard key={movie.id} {...movie} />
            </Link>
          );
        })}
      </div>
    </Fragment>
  );
};
