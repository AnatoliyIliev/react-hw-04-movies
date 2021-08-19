import { Switch, Route } from 'react-router-dom';
// import './App.module.scss';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import TrendingMovieDayView from './views/TrendingMovieDayView';


export default function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/authors">
          <AuthorsView />
        </Route>

        <Route path="/books" exact>
          <BooksView />
        </Route>

        <Route path="/books/:bookId">
          <BookDetailsView />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}
