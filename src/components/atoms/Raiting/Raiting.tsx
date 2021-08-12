import * as React from "react";
import "./index.css";

interface IRaiting {
  imdbVotes: number;
  imdbRating: number;

}

export const Raiting = ({ imdbVotes, imdbRating }: IRaiting) => (
  <div className="film-raiting-info">
            <p className="film-votes-info text">
              <span className="film-vote-name">Raiting</span>
              {imdbVotes} voted
            </p>
            <p className="film-raiting-value">{imdbRating}</p>
          </div>
);
