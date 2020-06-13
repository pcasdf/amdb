import axios from 'axios';

const KEY = `${process.env.REACT_APP_KEY}`;
const TMDB_MOVIE = 'https://api.themoviedb.org/3/movie';
const TMDB_BASE = 'https://api.themoviedb.org/3';
const OMDB_URL = 'https://www.omdbapi.com/?apikey=fdbaa0a9';

const fetchData = async url => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (err) {
    console.log('Something went wrong.');
  }
};

export const fetchDetails = async id => {
  const movie = await fetchData(`${TMDB_MOVIE}/${id}?api_key=${KEY}`);
  const response = await fetchData(`${OMDB_URL}&i=${movie.data.imdb_id}`);
  const images = await fetchData(`${TMDB_MOVIE}/${id}/images?api_key=${KEY}`);
  const recommends = await fetchData(
    `${TMDB_MOVIE}/${id}/recommendations?api_key=${KEY}`
  );
  const vid = await fetchData(`${TMDB_MOVIE}/${id}/videos?api_key=${KEY}`);
  return { movie, response, images, recommends, vid };
};

export const fetchCast = async name => {
  return await fetchData(
    `${TMDB_BASE}/search/person?api_key=${KEY}&language=en-US&query=${name}&page=1&include_adult=false`
  );
};

export const fetchGenres = async (page, id) => {
  return await fetchData(
    `${TMDB_BASE}/discover/movie?api_key=${KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${id}`
  );
};

export const fetchHomepage = async () => {
  const moviesResponse = await fetchData(
    `${TMDB_BASE}/trending/movie/week?api_key=${KEY}&page=1`
  );
  const tvSeriesResponse = await fetchData(
    `${TMDB_BASE}/trending/tv/week?api_key=${KEY}&page=1`
  );
  return { moviesResponse, tvSeriesResponse };
};

export const fetchPeople = async id => {
  const details = await fetchData(
    `${TMDB_BASE}/person/${id}?api_key=${KEY}&language=en-US`
  );
  const otherDetails = await fetchData(
    `${TMDB_BASE}/search/person?api_key=${KEY}&language=en-US&query=${details.data.name}&page=1&include_adult=false`
  );
  const imageData = await fetchData(
    `${TMDB_BASE}/person/${id}/images?api_key=${KEY}`
  );
  return { details, otherDetails, imageData };
};

export const fetchSearch = async input => {
  return await fetchData(
    `${TMDB_BASE}/search/multi?api_key=${KEY}&query=${input}&page=1`
  );
};

export const fetchTop = async (category, page) => {
  return await fetchData(
    `${TMDB_BASE}/${category}/top_rated?api_key=${KEY}&language=en-US&page=${page}`
  );
};

export const fetchTrending = async (category, time, page) => {
  return await fetchData(
    `${TMDB_BASE}/trending/${category}/${time}?api_key=${KEY}&page=${page}`
  );
};
