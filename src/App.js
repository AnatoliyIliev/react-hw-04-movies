import { Switch, Route } from 'react-router-dom';
// import './App.module.scss';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import AppBar from './components/AppBar';
import Container from './components/Container';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import Cast from './views/Cast';
import Reviews from './views/Reviews';
import NotFoundVievs from './views/NotFoundVievs';

export default function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId" exact>
          <MovieDetailsPage />
        </Route>

        <Route path="/movies/:movieId/cast" exact>
          <Cast />
        </Route>

        <Route path="/movies/:movieId/reviews">
          <Reviews />
        </Route>

        <Route>
          <NotFoundVievs />
        </Route>
      </Switch>
    </Container>
  );
}
