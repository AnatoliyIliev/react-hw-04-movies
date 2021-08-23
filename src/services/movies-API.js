const API_KEY = '62206d4957df9dd79d427a079d453822';
const BASE_URL = 'https://api.themoviedb.org/3';

// https://api.themoviedb.org/3/movie/550?api_key=62206d4957df9dd79d427a079d453822

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTopMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  );
}

export function fetchSearchMovie(searchQuery) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`,
  );
}

export function fetchMovieById(movie_id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`,
  );
}

export function fetchMovieCredits(movie_id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}`,
  );
}

export function fetchMovieReviews(movie_id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}`,
  );
}
