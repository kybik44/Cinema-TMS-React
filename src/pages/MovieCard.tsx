import React, { Fragment, useState } from "react";
import { films } from "../mock";
import { trailers } from "../mock"
import { FilmCard } from "../components/molecules/FilmCard";
import { Header } from "../components/molecules/Header";
import { TrailerCard } from "../components/molecules/TrailerCard";
import { RaitingCard } from "../components/molecules/RaitingCard";
import { IFilm } from "../types";

export const MovieCard = ({id}:any) => {
  
  return (
    <Fragment>
      <Header title="Movie" />
      <FilmCard {...films[id]} />
      <TrailerCard {...trailers[id]} {...films[id]}/>
      <RaitingCard raiting="2"/>
    </Fragment>
  );
};
