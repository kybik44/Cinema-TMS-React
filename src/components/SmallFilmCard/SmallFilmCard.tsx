
import { Title } from "../atoms/Title";
import { Poster } from "../atoms/Poster";
import "./index.css";
import { Plot } from "../atoms/Plot";
import { NavLink } from "react-router-dom";


interface ISmallFilmCard {
  poster: string;
  title: string;
  plot: string;
  year: number;

}

export const SmallFilmCard = 
  ({ poster, title, plot, year }: ISmallFilmCard) => {
    return (

      <div className={"small-film-card"}>
        <div className={"small-film-card-content"}>
          <Poster src={poster} width="130px" height="200px" isSmallCard={true}/>
          <Title title={title} isSmallCard={true} />
          <p className="film-year">{year}</p>
          <Plot text={plot} isSmallCard={true} />
        </div>
      </div>
  
    );
  }
