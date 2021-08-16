import React, { Fragment } from "react";
import { films } from "../mock";
import { trailers } from "../mock"
import { FilmCard } from "../components/molecules/FilmCard";
import { Header } from "../components/molecules/Header";
import { TrailerCard } from "../components/molecules/TrailerCard";
import { RaitingCard } from "../components/molecules/RaitingCard";

export const MovieCard = () => {
  return (
    <Fragment>
      <Header title="Movie" />
      <FilmCard {...films[2]} />
      <TrailerCard {...trailers[2]} {...films[2]}/>
      <RaitingCard raiting="2"/>
    </Fragment>
  );
};
