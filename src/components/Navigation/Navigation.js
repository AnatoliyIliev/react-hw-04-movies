import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => (
  <nav>
    <NavLink
      exact
      to="/"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Главная
    </NavLink>

    <NavLink
      exact
      to="/movies"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Поиск фильмов
    </NavLink>
  </nav>
);

export default Navigation;
