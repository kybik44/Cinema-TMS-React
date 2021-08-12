import * as React from "react";
import "./index.css";
import { IFilm } from "../../../types";
import { DescriptionListItem } from "../../atoms/DescriptionListItem";


export const FilmCard = ({
  year,
  poster,
  imdbRating,
  imdbVotes,
  title,
  released,
  runtime,
  boxOffice,
  genre,
  country,
  production,
  writer,
  director,
  actors,
  plot,
}: IFilm) => (
  <div className="film-card">
    <div className="film-info">
      <div className="film-intro">
        <div className="film-intro-info">
          <div className="film-poster">
            <img src={poster} alt="Poster" />
          </div>
          <div className="film-raiting-info">
            <p className="film-votes-info text">
              <span className="film-vote-name">Raiting</span>
              {imdbVotes} voted
            </p>
            <p className="film-raiting-value">{imdbRating}</p>
          </div>
        </div>
        <div className="film-description">
          <h2 className="film-title">{title}</h2>
          <div className="">
            <ul className="film-description-column">
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
        </div>
      </div>
      <p className="film-text text">{plot}</p>
    </div>
  </div>
);
