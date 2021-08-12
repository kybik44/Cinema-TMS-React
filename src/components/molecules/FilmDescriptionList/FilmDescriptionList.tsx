import * as React from "react";
import "./index.css";
import { DescriptionListItem } from "../../atoms/DescriptionListItem";

interface IFilmDescriptionList {
    year: number,
    released: string | number,
    runtime: string,
    genre: string[],
    director: string,
    writer: string,
    actors: string[],
    country: string,
    poster: string,
    boxOffice: string,
    production: string,
    
  }
export const FilmDescriptionList = ({
    year,
    released,
    runtime,
    boxOffice,
    genre,
    country,
    production,
    writer,
    director,
    actors,
  }: IFilmDescriptionList) => (
    <div className="film-description-column">
    <ul className="film-description-list">
      <DescriptionListItem name="Year" value={year} />
      <DescriptionListItem name="Released" value={released} />
      <DescriptionListItem name="Runtime" value={runtime} />
      <DescriptionListItem name="BoxOffice" value={boxOffice} />
      <DescriptionListItem name="Genres" value={genre.join(", ")} />
      <DescriptionListItem name="Country" value={country} />
      <DescriptionListItem name="Production" value={production} />
      <DescriptionListItem name="Writers" value={writer} />
      <DescriptionListItem name="Director" value={director} />
      <DescriptionListItem name="Actors" value={actors.join(", ")} />
    </ul>
  </div>
)