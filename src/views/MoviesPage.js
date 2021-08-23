import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import * as movieShelfAPI from '../services/movies-API';
import { ToastContainer } from 'react-toastify';
import styles from './views.module.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const { url, path } = useRouteMatch();
  // const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResalt, setSearchResalt] = useState(null);

  console.log(location);
  console.log(history);

  // const handleSearchQueryChange = event => {
  //   // event.preventDefault();
  //   console.log(event.target.value);
  //   setSearch(event.currentTarget.value.toLowerCase());
  // };
  // console.log(search);
  // console.log(searchResalt);
  // console.log(useRouteMatch());
  // console.log(searchQuery);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    movieShelfAPI
      .fetchSearchMovie(searchQuery)
      .then(setSearchResalt)
      .catch(() => setError(`Поиск ${searchQuery} не дал результата`));
  }, [searchQuery]);

  const handleSubmit = event => {
    event.preventDefault();

    console.log(event.target.elements[0].value);
    let search = event.target.elements[0].value;

    // console.log(event.currentTarget);
    // console.log(url);

    if (search.trim() === '') {
      toast.error('Введите что-то для поиска.');
      return;
    }
    // onSubmit(searchQuery);
    setSearchQuery(search);
    // setSearch('');
    search = '';
  };

  return (
    <>
      <header className={styles.Searchbar}>
        <form onSubmit={handleSubmit} className={styles.SearchForm}>
          <input
            className={styles.SearchForm_input}
            type="text"
            // value={search}
            // onChange={handleSearchQueryChange}
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
              <Link to={`${url}/${movie.id}`}>
                <img
                  className={styles.imag}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="movie.original_title"
                />
                <p className={styles.text}>{movie.original_title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
