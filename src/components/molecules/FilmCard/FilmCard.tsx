import * as React from "react";
import "./index.css";
import { IFilm } from "../../../types";
import { FilmDescriptionList } from "../FilmDescriptionList";
import { Poster } from "../../atoms/Poster";
import { Raiting } from "../../atoms/Raiting";

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
            <Poster src={poster} width="225px" height="340px" />
          </div>
          <Raiting imdbVotes={imdbVotes} imdbRating={imdbRating} />
        </div>
        <div className="film-description">
          <h2 className="film-title">{title}</h2>
          <FilmDescriptionList
            year={year}
            poster={poster}
            released={released}
            runtime={runtime}
            boxOffice={boxOffice}
            genre={genre}
            country={country}
            production={production}
            writer={writer}
            director={director}
            actors={actors}
          />
        </div>
      </div>
      <p className="film-text text">{plot}</p>
    </div>
  </div>
);
