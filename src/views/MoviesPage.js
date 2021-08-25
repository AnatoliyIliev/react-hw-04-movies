import { useState, useEffect } from 'react';
import { useHistory, useLocation, Link, useRouteMatch } from 'react-router-dom';
import * as movieShelfAPI from '../services/movies-API';
import { ToastContainer } from 'react-toastify';
import styles from './views.module.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import queryString from 'query-string';
import notFound from '../userNotFound/no-photo-svgrepo-com.svg';

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  const value = queryString.parse(location.search)?.query ?? '';
  const [searchResalt, setSearchResalt] = useState(null);
  // const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!value) {
      return;
    }
    movieShelfAPI
      .fetchSearchMovie(value)
      .then(setSearchResalt)
      .catch(() => console.log(`Поиск ${value} не дал результата`));
  }, [value]);

  const handleSubmit = event => {
    event.preventDefault();

    let search = event.target.movie.value;

    if (search.trim() === '') {
      toast.error('Введите что-то для поиска.');
      return;
    }
    history.push({
      ...location,
      search: `query=${search}`,
    });

    document.getElementById('movieInput').value = '';
  };

  return (
    <>
      <header className={styles.Searchbar}>
        <form onSubmit={handleSubmit} className={styles.SearchForm}>
          <input
            className={styles.SearchForm_input}
            type="text"
            id="movieInput"
            // value={search}
            name="movie"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <button type="submit" className={styles.SearchForm_button}>
            <span className={styles.SearchForm_button_label}>Search</span>
          </button>
        </form>
        <ToastContainer />
        <hr />
      </header>
      {searchResalt && (
        <ul className={styles.images}>
          {searchResalt.results.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${url}/${movie.id}`,
                  state: { from: location },
                }}
              >
                <img
                  width="250px"
                  height="375px"
                  className={styles.imag}
                  src={
                    movie.poster_path !== null
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : // : 'https://img.icons8.com/ios-filled/50/000000/user-not-found.png'
                        notFound
                  }
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
