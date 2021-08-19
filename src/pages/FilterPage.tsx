import React, { Fragment, useState } from "react";
import { films as movies} from "../mock";
import { trailers } from "../mock"
import { Header } from "../components/molecules/Header";
import { FilterCard } from "../components/molecules/FilterCard";
import { BrowserRouter } from "react-router-dom";
import { SmallFilmCard } from "../components/molecules/SmallFilmCard";
import { IFilm } from "../types";

export const FilterPage = () => {
    const [films, setFilms] = useState(movies);
  const searchFilm = (filmsArray: IFilm[], searchString: string) => {
    return filmsArray.filter((film) =>
      film.title.toLowerCase().includes(searchString.toLowerCase()) ||
      film.plot.toLowerCase().includes(searchString.toLowerCase())
    );
  };

  const handlerFilms = (searchString: string) => {
    if (searchString.length >= 2) {
      setFilms(searchFilm(movies, searchString));
    }
  };
  return (
    <BrowserRouter>
    <Fragment>
        <Header title="Filter and sort" href="/filterPage"/>
     <FilterCard onInputSearch={handlerFilms}/>
     <div className="small-card-list">
     {films.map((film) => {
          return <SmallFilmCard key={film.id} {...film} />;
        })}
        </div>
    </Fragment>
    </BrowserRouter>
  );
};
