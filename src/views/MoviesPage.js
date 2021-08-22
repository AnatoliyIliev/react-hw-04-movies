import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import * as movieShelfAPI from '../services/movies-API';

export default function MoviesPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  // useEffect(() => {
  //   movieShelfAPI.fetchMovieById(movieId).then(setMovie);
  // }, [movieId]);

  console.log(movie);
  console.log(movieId);

  return (
    <>
      <h2>MoviesPage</h2>
      {movie && (
        <>
          <img
            style={{ width: 200 }}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.original_title}
          />
          <div>
            <h2>{movie.original_title}</h2>
            <p>Use storage: {movie.vote_count}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
          </div>
        </>
      )}
    </>
  );
}
