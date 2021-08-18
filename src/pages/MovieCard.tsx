import React, { Fragment } from "react";
import { films } from "../mock";
import { trailers } from "../mock"
import { FilmCard } from "../components/molecules/FilmCard";
import { Header } from "../components/molecules/Header";
import { TrailerCard } from "../components/molecules/TrailerCard";
import { RaitingCard } from "../components/molecules/RaitingCard";

export const MovieCard = () => {
  const selectedFilm = films[2]
  const selectedTrailer = trailers[1]
  return (
    <Fragment>
      <Header title="Movie" />
      <FilmCard {...selectedFilm} />
      <TrailerCard {...selectedTrailer} {...selectedFilm}/>
      <RaitingCard raiting="2"/>
    </Fragment>
  );
};
