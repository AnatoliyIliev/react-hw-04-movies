import { useState, useEffect } from 'react';
import { useParams, NavLink, useRouteMatch, Route } from 'react-router-dom';
import * as movieShelfAPI from '../services/movies-API';
import styles from './views.module.scss';
import Cast from './Cast';

export default function MovieDetailsPage({ movies }) {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    movieShelfAPI.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  // console.log(url);

  console.log(movie);
  // console.log(movieId);

  return (
    <>
      <NavLink className={styles.back} to={`${url}`}>
        Go back
      </NavLink>
      {movie && (
        <>
          <div className={styles.container}>
            <img
              style={{ width: 200 }}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.original_title}
            />
            <div className={styles.items}>
              <h2>{movie.original_title}</h2>
              <p>User store: {movie.vote_average}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              <ul className={styles.genres}>
                {movie.genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
          <div>
            <p className={styles.info}>Additional information</p>
            {/* <ul>
              <NavLink className={styles.link} to={`${url}/cast`}>
                Cast
              </NavLink>
              <NavLink className={styles.link} to={`${url}/reviews`}>
                Reviews
              </NavLink>
            </ul> */}
          </div>
          <Route path={`${path}movies/:movieId`}>
            {movies && <Cast movies={movies} />}
          </Route>
        </>
      )}
    </>
  );
}
