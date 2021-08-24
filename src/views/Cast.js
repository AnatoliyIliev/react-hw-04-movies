import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import * as movieShelfAPI from '../services/movies-API';
import styles from './views.module.scss';

export default function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    movieShelfAPI.fetchMovieCredits(movieId).then(setActors);
  }, [movieId]);

  return (
    <>
      {actors && (
        <ul>
          {actors.cast.map(actor => (
            <li key={actor.id}>
              <img
                className={styles.imag_actors}
                src={
                  actor.poster_path !== null
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : 'https://img.icons8.com/ios-filled/50/000000/user-not-found.png'
                }
                alt={actor.original_name}
              />
              <div className={styles.actors_name}>
                <p className={styles.text_actors}>
                  Actor name: {actor.original_name}
                </p>
                <p className={styles.text_actors}>
                  Character name: {actor.character}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
