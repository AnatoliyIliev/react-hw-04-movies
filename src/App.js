import { Switch, Route } from 'react-router-dom';
// import './App.module.scss';
import AppBar from './components/AppBar';
import Container from './components/Container';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
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

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <NotFoundVievs />
        </Route>
      </Switch>
    </Container>
  );
}
