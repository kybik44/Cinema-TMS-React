import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Link,
  useParams
} from "react-router-dom"
import { films as movies} from "../../../mock";
import { MovieCard } from '../../../pages/MovieCard';



const Product = ({ movie }) => {
  return (
    <li>
      <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
    </li>
  )
}

const MovieDetails = ({movies}) => {
  const id = useParams().id
  const movie = movies.find(movie => movie.id === Number(id))
  return (
    <MovieCard id={movie.id-1} />
  )
}

export const Testik = () => {
  const styles = { padding: 5 }

  return (
    <Router>
      <div>

        <ul>
          {movies.map(movie =>
            <Product
              key={movie.id}
              movie={movie} />
          )}
        </ul>

      </div>

      <Switch>
        <Route path="/movie/:id">
          <MovieDetails movies={movies} />
        </Route>
      </Switch>
    </Router>
  );
}

