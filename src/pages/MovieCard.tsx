import React, { useState } from 'react';
import { films } from "../mock";
import { FilmCard } from "../components/molecules/FilmCard";
import { Header } from '../components/molecules/Header';

  
export const MovieCard = () => {
  
 return(
    <div>
    <Header title="Movie"/>
    <FilmCard {...films[2]} /> 
     </div>

 )       
}