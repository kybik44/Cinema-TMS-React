import * as React from "react";
import "./index.css";
import { IFilm } from "../../../types";



export const FilmCard = ({ ...film }: IFilm) => (
    <div className="film-card">
      <div className="film-info">
        <div className="film-intro">
        <div className="film-intro-info">
       <div className="film-poster">
         <img src={film.poster} alt="Постер" />
       </div>
       <div className="film-raiting-info">
            <p className="film-votes-info text"><span className="film-vote-name">Raiting</span>{film.imdbVotes} voted</p>
            <p className="film-raiting-value">{film.imdbRating}</p>
       </div>
     </div>
     <div className="film-description">
       <h2 className="film-title">{film.title}</h2>
       <div className="">
        <ul className="film-description-column">
          <li className="film-description__item"><p className="item-name text">Year</p><p className="item-value text">{film.year}</p></li>
          <li className="film-description__item"><p className="item-name text">Released</p><p className="item-value text">{film.released}</p></li>
          <li className="film-description__item"><p className="item-name text">Runtime</p><p className="item-value text">{film.runtime}</p></li>
          <li className="film-description__item"><p className="item-name text">BoxOffice</p><p className="item-value text">{film.boxOffice}</p></li>
          <li className="film-description__item"><p className="item-name text">Genres</p><p className="item-value text">{film.genre.join(', ')}</p></li>
          <li className="film-description__item"><p className="item-name text">Country</p><p className="item-value text">{film.country}</p></li>
          <li className="film-description__item"><p className="item-name text">Production</p><p className="item-value text">{film.production}</p></li>
          <li className="film-description__item"><p className="item-name text">Writers</p><p className="item-value text">{film.writer}</p></li>
          <li className="film-description__item"><p className="item-name text">Director</p><p className="item-value text">{film.director}</p></li>
          <li className="film-description__item"><p className="item-name text">Actors</p><p className="item-value text">{film.actors.join(', ')}</p></li>
        </ul>
       </div>
     </div>
        </div>
        <p className="film-text text">{film.plot}</p>
      </div>
     
     
    </div>
  );

