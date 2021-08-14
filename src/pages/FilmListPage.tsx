import React, {Fragment} from 'react';
import { Title } from '../components/atoms/Title';
import { films } from "../mock";
import {FilmCard} from '../components/molecules/FilmCard'
export const FilmListPage = () => {

    return (
        <div>
 < Title title={"Movies"} />
        <div>
            {films.map((film) => {
            return <FilmCard key={film.id} {...film} />;
          })}
        </div>
        </div>
       
        
    )
}