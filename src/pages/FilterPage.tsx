import React, { Fragment, useEffect, useState } from "react";
import { films as movies } from "../mock";
import { Header } from "../components/molecules/Header";
import { FilterCard } from "../components/molecules/FilterCard";
import { BrowserRouter } from "react-router-dom";
import { SmallFilmCard } from "../components/molecules/SmallFilmCard";
import { IFilm } from "../types";
import { searchFilm } from "./FilmListPage";

export const FilterPage = () => {
  
  const [films, setFilms] = useState(movies);
  const searchFilmByTitlePlot = (filmsArray: IFilm[], searchString: string) => {
    return filmsArray.filter(
      (film) =>
        film.title.toLowerCase().includes(searchString.toLowerCase()) ||
        film.plot.toLowerCase().includes(searchString.toLowerCase())
    );
  };

  const handlerSearchFilms = (searchString: string) => {
    if (searchString.length >= 2) {
      setFilms(searchFilmByTitlePlot(movies, searchString));
    }
    if(!searchString.length){
      console.log(movies)
      console.log(searchString)
      setFilms(movies)
    }
  };

  const sortSettingsArray = [
    { field: "raiting", fieldName: "Rating", active: true },
    { field: "year", fieldName: "Year", active: true },
  ];
  const [searchString, setSearchString] = useState('');
  const handlerFilms = (searchString: string) => {
    setSearchString(searchString)
    if (searchString.length >= 3) {
      setFilms(searchFilm(movies, searchString));
    }
    if (!searchString.length) {
      setFilms(movies);
    }
  };
  const [sortSettings, setSortSettings] = useState(sortSettingsArray);
  const filterFilmsByField = (filmsArray: IFilm[], field: string) => {
    return [...filmsArray].sort((a: any, b: any) => a[field] - b[field]);
  };
  const handlerFilterButton = (field: string, isActive: boolean) => {
    setSortSettings((sortSettings) =>
      sortSettings.map((el) =>
        el.field === field ? { ...el, active: isActive } : el
      )
    );
    
    if (field === "raiting") {
      if (sortSettings[0].active) {
        setFilms(filterFilmsByField(movies, "imdbRating"));
      }else{setFilms(movies) }

    }
    if (field === "year") {
      if (sortSettings[1].active) {
        setFilms(filterFilmsByField(movies, "year"));
      }else{setFilms(movies) }
    }
  };
  
  return (
    <BrowserRouter>
      <Fragment>
        <Header value = {searchString} title="Filter and sort" href="/filterPage" onInputSearch={handlerFilms}/>
        <FilterCard
          onInputSearch={handlerSearchFilms}
          onClickFilterButton={handlerFilterButton}
          sortSettings={sortSettings}
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
