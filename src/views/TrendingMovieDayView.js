import { useState, useEffect } from 'react';
import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import * as movieShelfAPI from '../services/movies-API';

export default function TrendingMovieDay() {    
    const { url, path } = useRouteMatch();
    const [movies, setMovies] = useState(null);


    useEffect(() => {
        movieShelfAPI.fetchTopMovies().then(setMovies);
      }, []);
    
    return (
    <>
      {/* <PageHeading text="Авторы" /> */}

      {authors && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`${url}/${movie.id}`}>{movie.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <hr />

      <Route path={`${path}/:movie_id`}>
        {movies && <AuthorSubView movies={movies} />}
      </Route>
    </>
  );
    
}