// const axios = require('axios');

const API_KEY = '21951124-cbc15cb68780ddc893d0875a8';
const BASE_URL = 'https://pixabay.com/api';

function fetchImages(searchQuery, page) {
  const API_URL = `${BASE_URL}/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(API_URL).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Поиск ${searchQuery} не дал результата`));
  });
}

const api = {
  fetchImages,
};

export default api;
