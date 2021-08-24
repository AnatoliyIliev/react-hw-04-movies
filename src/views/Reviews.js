import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import * as movieShelfAPI from '../services/movies-API';
import styles from './views.module.scss';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    movieShelfAPI.fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews &&
        (reviews.results.length > 0 ? (
          <ul>
            {reviews.results.map(review => (
              <li key={review.id}>
                <p className={styles.text_actors}>
                  Actor name: {review.author}
                </p>
                <p className={styles.text_actors}>
                  Character name: {review.content}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie.</p>
        ))}
    </>
  );
}
