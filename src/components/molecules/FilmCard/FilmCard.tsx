import * as React from "react";
import "./index.css";
import { IFilm } from "../../../types";
import { FilmDescriptionList } from "../FilmDescriptionList";
import { Poster } from "../../atoms/Poster";
import { Raiting } from "../../atoms/Raiting";
import { Title } from "../../atoms/Title";
import { Plot } from "../../atoms/Plot";


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

            <Poster src={poster} width="225px" height="340px" isSmallCard={false}/>
         
          <Raiting imdbVotes={imdbVotes} imdbRating={imdbRating} />
        </div>
        <div className="film-description">
          <Title title={title} isSmallCard={false}/>
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
     <Plot text={plot} isSmallCard={false} />
    </div>
  </div>
);
