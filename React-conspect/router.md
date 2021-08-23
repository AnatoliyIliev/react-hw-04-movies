import { Switch, Route } from 'react-router-dom';

1.  Switch - оборачиваем в тег <Switch></Switch> - ищет первое совподение, если
    нашел - останавливается.
2.  Route - <Route path="/colorpicker"></Route> - обязательно указать путь
    (path)
3.  Link -заменяет обычную ссылку - <Link to="/">Home</Link>
4.  NavLink - можно добавить стили -
    <NavLink to="/" activeClassName="active">Home</NavLink>
5.  useRouteMatch - совпадение адресной строки ( где мы сейчас находимся )
    - const { url, path } = useRouteMatch(); или
    - let match = useRouteMatch("/blog/:slug"); или
    - const match = useRouteMatch({ path: "/BLOG/:slug/", strict: true,
      sensitive: true });
6.  <BrowserRouter> - в это завернуть <App /> в index.js
7.  useParams() - const { movieId } = useParams();
    - возвращяет объект динамических параметров, все что идет после : а именно
      movieId
    - <Route path="/movies/:movieId" exact>
    -       <MovieDetailsPage />
    -     </Route>
