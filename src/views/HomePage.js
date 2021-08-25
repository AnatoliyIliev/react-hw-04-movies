import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import * as movieShelfAPI from '../services/movies-API';
import PageHeading from '../components/PageHeading';
import styles from './views.module.scss';
// import MovieDetailsPage from './MoviesPage';

export default function HomePage() {
  const location = useLocation();
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);
  // const { movieId } = useParams();

  useEffect(() => {
    movieShelfAPI.fetchTopMovies().then(setMovies);
  }, []);

  return (
    <>
      <PageHeading text="Trending today" />

      {movies && (
        <ul className={styles.images}>
          {movies.results.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${url}movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                <img
                  width="250px"
                  height="375px"
                  className={styles.imag}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.original_title}
                />
                <p className={styles.text}>{movie.original_title}</p>
                <p className={styles.text}>{movie.release_date}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
