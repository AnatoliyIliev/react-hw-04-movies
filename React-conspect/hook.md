1. useState - const [searchQuery, setSearchQuery] = useState('');
2. useEffect - useEffect(() => {}, [зависимость]);
3. useRef - const onLoading = useRef(loading); - фиксирует значение юзстэйта
   loading - чтобы достучатся до значения - onLoading.current
4. useContext -const value = useContext(MyContext);
   - Неправильно: useContext(MyContext.Consumer)
   - Пример:
   - const themes = { light: { foreground: "#000000", background: "#eeeeee" }}
   - const ThemeContext = React.createContext(themes.light);
   - const theme = useContext(ThemeContext);
   - return ( <button
     style={{ background: theme.background, color: theme.foreground }}/>
5. useMemo - будет повторно вычислять мемоизированное значение только тогда,
   когда значение какой-либо из зависимостей изменилось. Помните, что функция,
   переданная useMemo, запускается во время рендеринга.
6. useReducer -
7. useCallback - вернёт мемоизированную версию колбэка, который изменяется
   только, если изменяются значения одной из зависимостей. useCallback(fn, deps)
   — это эквивалент useMemo(() => fn, deps).
8. useHistory() - достук к адресной строке(истории)
9. useLocation() - текущее место положение
10. new URLSearchParams(location.search).get("query") - получить значение с
    адресной строке
    - history.push({
      - ...location,
      - search: `query=${search}`,
    - });
    - const HomePage = lazy(() => import('./views/HomePage' /_webpackChunkName:
      "HomePage"_/));
11. React.lazy() - ленивая загрузка, чтобы грузить текущую страницу и все.
12. Suspense -<Suspense fallback={<div>Loading.....</div>}></Suspense>
