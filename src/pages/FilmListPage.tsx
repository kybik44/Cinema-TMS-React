import React, { Fragment, useState } from "react";
import { BrowserRouter, Link, Route, Router, Switch, useParams } from "react-router-dom";
import { Header } from "../components/molecules/Header";
import { SmallFilmCard } from "../components/molecules/SmallFilmCard";
import { films as movies } from "../mock";
import { IFilm } from "../types";
import { MovieCard } from "./MovieCard";

export const FilmListPage = () => {
  const [films, setFilms] = useState(movies);
  const searchFilm = (filmsArray: IFilm[], searchString: string) => {
    return filmsArray.filter((film) =>
      film.title.toLowerCase().includes(searchString.toLowerCase())
    );
  };

  const handlerFilms = (searchString: string) => {

      // console.log(searchString)
    if (searchString.length >= 2) {
      
      setFilms(searchFilm(movies, searchString));
    }
    if(!searchString.length){
      
      setFilms(movies)
      
    }
    console.log({searchString, films});
  };
  return (
    <Fragment>
      <Header title="Movies" onInputSearch={handlerFilms} />
      <div className="small-card-list">
        {films.map((movie) => {
          return <Link to={`/filmList/${movie.id}`}> <SmallFilmCard key={movie.id} {...movie} /> </Link>
        })}
      </div>
    </Fragment>
  );
};
