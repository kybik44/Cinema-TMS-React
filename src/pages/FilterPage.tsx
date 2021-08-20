import React, { Fragment, useState } from "react";
import { films as movies } from "../mock";
import { Header } from "../components/molecules/Header";
import { FilterCard } from "../components/molecules/FilterCard";
import { BrowserRouter } from "react-router-dom";
import { SmallFilmCard } from "../components/molecules/SmallFilmCard";
import { IFilm } from "../types";

export const FilterPage = () => {
  const [films, setFilms] = useState(movies);
  const searchFilmByTitlePlot = (filmsArray: IFilm[], searchString: string) => {
    return filmsArray.filter(
      (film) =>
        film.title.toLowerCase().includes(searchString.toLowerCase()) ||
        film.plot.toLowerCase().includes(searchString.toLowerCase())
    );
  };
  const filterFilmsByRaiting = (filmsArray: IFilm[]) => {
    return filmsArray.sort((a, b) => a.imdbRating - b.imdbRating);
  };
  const handlerSearchFilms = (searchString: string) => {
    if (searchString.length >= 2) {
      setFilms(searchFilmByTitlePlot(movies, searchString));
    }
  };
  const sortSettings = [
    { field: "raiting", fieldName: "Rating", active: false },
    { field: "year", fieldName: "Year", active: false },
  ];
  const [btnClicked, setBtnClicked] = useState(false);
  const handlerFilterButton = (status: any) => {
    setBtnClicked(!btnClicked);
    if (status) {
      setFilms(filterFilmsByRaiting(movies));
    }
  };
  return (
    <BrowserRouter>
      <Fragment>
        <Header title="Filter and sort" href="/filterPage" />
        <FilterCard
          onInputSearch={handlerSearchFilms}
          onClickFilterButton={handlerFilterButton}
        />
        <div className="small-card-list">
          {films.map((film) => {
            return <SmallFilmCard key={film.id} {...film} />;
          })}
        </div>
      </Fragment>
    </BrowserRouter>
  );
};
