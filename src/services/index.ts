import axios from 'axios';

const API_KEY = process.env.VITE_TMDB_API_KEY;
const API_BASE_URL = 'https://api.themoviedb.org/3/';

const API = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + API_KEY,
  },
});

export default API;
