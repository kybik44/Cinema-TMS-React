import React, { Fragment } from "react";
import { films } from "../mock";
import { FilmCard } from "../components/molecules/FilmCard";
import { Header } from "../components/molecules/Header";

export const MovieCard = () => {
  return (
    <Fragment>
      <Header title="Movie" />
      <FilmCard {...films[2]} />
    </Fragment>
  );
};
