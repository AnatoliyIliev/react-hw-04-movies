import { useState, useEffect } from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import * as movieShelfAPI from '../services/movies-API';
import PageHeading from '../components/PageHeading';
import MoviesPage from './MoviesPage';

export default function HomePage() {
  const { url, path } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    movieShelfAPI.fetchTopMovies().then(setMovies);
  }, []);

  console.log(movies);

  return (
    <>
      <PageHeading text="Trending today" />

      {movies && (
        <ul>
          {movies.results.map(movie => (
            <li key={movie.id}>
              <Link to={`${url}/${movie.id}`}>
                {/* <img style={{width:200}} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie.original_title"/> */}
                {movie.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Route path={`${path}/:movieId`}>
        {movies && <MoviesPage movie={movies} />}
      </Route>
    </>
  );
}
