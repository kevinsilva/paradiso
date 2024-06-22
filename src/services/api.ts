import axios from 'axios';

const API_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
const API_BASE_URL = 'https://api.themoviedb.org/3/';

const API = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export default API;
