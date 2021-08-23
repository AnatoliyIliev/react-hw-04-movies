import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => (
  <div>
    <nav>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>

      <NavLink
        exact
        to="/movies"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Movies
      </NavLink>
    </nav>
    <hr />
  </div>
);

export default Navigation;
