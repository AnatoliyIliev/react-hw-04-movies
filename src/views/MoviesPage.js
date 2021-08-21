import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieShelfAPI from '../services/movies-API';
import PageHeading from '../components/PageHeading';

export default function MoviesPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    movieShelfAPI.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);
  console.log(movie);
  console.log(movieId);

  return (
    <>
      <PageHeading text="Movie" />

      {movie && (
        // <img style={{width:200}} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title}/>
        <h2>{movie.original_title}</h2>
      )}
    </>
  );
}
