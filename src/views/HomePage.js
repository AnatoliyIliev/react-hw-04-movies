import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as movieShelfAPI from '../services/movies-API';
import PageHeading from '../components/PageHeading';

export default function HomePage() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    movieShelfAPI.fetchTopMovies().then(setMovies);
  }, []);

  console.log(movies);

  return (
    <>
      <PageHeading text="Список популярных кинофильмов" />
      <h3>{movies}</h3>

      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${url}/${movie.id}`}>{movie.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
