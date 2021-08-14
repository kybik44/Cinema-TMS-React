import React, {Fragment} from 'react';
import { films } from "../mock";
import { FilmCard } from "../components/molecules/FilmCard";
import { TitleLine } from '../components/molecules/TitleLine';
export const MovieCard = () => {
 return(
     <div>
    <TitleLine />
    <FilmCard {...films[2]} /> 
     </div>

 )       
}