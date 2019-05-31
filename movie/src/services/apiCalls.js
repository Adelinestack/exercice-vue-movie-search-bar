import { API_SEARCH_URL, API_KEY } from '../assets/const';
import axios from 'axios';

const getMoviesByKeywords = keywords =>
  axios.get(`${API_SEARCH_URL}?api_key=${API_KEY}&query=${keywords}`);

async function getMoviesDatasByKeyword(keywords) {
  const {
    data: { results },
  } = await getMoviesByKeywords(keywords);
  return results;
}

export { getMoviesDatasByKeyword };
