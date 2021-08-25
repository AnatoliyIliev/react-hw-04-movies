import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container';

const HomePage = lazy(() =>
  import('./views/HomePage' /*webpackChunkName: "HomePage"*/),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /*webpackChunkName: "MoviesPage"*/),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /*webpackChunkName: "MovieDetailsPage"*/),
);
// const NotFoundVievs = lazy(() => import('./views/NotFoundVievs' /*webpackChunkName: "NotFoundVievs"*/));

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Loading.....</div>}>
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
            {/* <NotFoundVievs /> */}
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
