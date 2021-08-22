import { useState, useEffect } from 'react';
import { NavLink, Route, useRouteMatch, useParams } from 'react-router-dom';
import * as movieShelfAPI from '../services/movies-API';
import PageHeading from '../components/PageHeading';
// import MovieDetailsPage from './MoviesPage';

export default function HomePage() {
  const { url, path } = useRouteMatch();
  const [movies, setMovies] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    movieShelfAPI.fetchTopMovies().then(setMovies);
  }, []);

  // console.log(movies);
  console.log(url);
  console.log(path);
  console.log(movieId);

  return (
    <>
      <PageHeading text="Trending today" />

      {movies && (
        <ul>
          {movies.results.map(movie => (
            <li key={movie.id}>
              <NavLink to={`${url}movies/${movie.id}`}>
                {/* <img style={{width:200}} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie.original_title"/> */}
                {movie.original_title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      {/* <Route path={`${path}movies/:movieId`}>
        {movies && <MovieDetailsPage movies={movies} />}
      </Route> */}
    </>
  );
}
