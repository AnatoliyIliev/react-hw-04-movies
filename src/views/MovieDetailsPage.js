import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  Link,
  useRouteMatch,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom';
import * as movieShelfAPI from '../services/movies-API';
import styles from './views.module.scss';
// import Cast from './Cast';
// import Reviews from './Reviews';

const Cast = lazy(() => import('./Cast' /*webpackChunkName: "HomePage"*/));
const Reviews = lazy(() =>
  import('./Reviews' /*webpackChunkName: "HomePage"*/),
);

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    movieShelfAPI.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/');
    console.log(location);
    console.log(history);
  };

  return (
    <>
      {movie && (
        <>
          <button className={styles.back} type="batton" onClick={onGoBack}>
            Go back
          </button>
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
            <ul>
              <li>
                <Link
                  className={styles.link}
                  to={{
                    pathname: `${url}/cast`,
                    state: { from: location },
                  }}
                  // to={`${url}/cast`}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  className={styles.link}
                  to={{
                    pathname: `${url}/reviews`,
                    state: { from: location },
                  }}
                  // to={`${url}/reviews`}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            {/* <Route path="/movies/:movieId/cast"> */}
            <Route path={`${path}/cast`} exact>
              <Cast />
            </Route>

            {/* <Route path="/movies/:movieId/reviews"> */}
            <Route path={`${path}/reviews`}>
              <Reviews />
            </Route>
          </Suspense>
        </>
      )}
    </>
  );
}
