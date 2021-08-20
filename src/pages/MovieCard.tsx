import React, { Fragment, useState } from "react";
import { films } from "../mock";
import { trailers } from "../mock"
import { FilmCard } from "../components/molecules/FilmCard";
import { Header } from "../components/molecules/Header";
import { TrailerCard } from "../components/molecules/TrailerCard";
import { RaitingCard } from "../components/molecules/RaitingCard";
import { IFilm } from "../types";
import { useParams } from "react-router-dom";

export const MovieCard = () => {
  const {id}:any = useParams();

  const selectedFilm = films[id-1]
  const selectedTrailer = trailers[id-1]
  console.log(selectedFilm)
  return (
    <Fragment>
      <Header title="Movie" />
      <FilmCard {...selectedFilm} />
      <TrailerCard {...selectedTrailer} {...selectedFilm}/>
      <RaitingCard raiting="2"/>
    </Fragment>
  );
};
