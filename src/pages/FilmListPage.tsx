import React from "react";
import { Header } from "../components/molecules/Header";
import { SmallFilmCard } from "../components/SmallFilmCard";
import { films } from "../mock";


export const FilmListPage = () => {
  return (
    
    <div>
      <Header title="Movies" />
      <div className="small-card-list">
    

        {films.map((film) => {
          return <SmallFilmCard key={film.id} {...film}/>
        })}
     
      </div>
    </div>
  );
};
