const API_KEY = '18ec78dc9785f41c52841af5801bb5f2';
const BASE_URL = 'https://api.themoviedb.org/3';
const language = 'pt-BR';

const categories = {
  netflix_originals: 213,
  action: 28,
  comedy: 35,
  horror: 27,
  romance: 10749,
  documentary: 99
};

const fetchTitles = async url => {
  const response = await fetch(`${BASE_URL}${url}`);
  const data = await response.json();

  return data;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Netflix Originals',
        items: await fetchTitles(`/discover/tv?with_network=${categories.netflix_originals}&language=${language}&api_key=${API_KEY}`)
      },
      {
        slug: 'trendings',
        title: 'Recomended for you',
        items: await fetchTitles(`/trending/all/week?language=${language}&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Top rated',
        items: await fetchTitles(`/movie/top_rated?&language=${language}&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Action',
        items: await fetchTitles(`/discover/movie?with_genres=${categories.action}&language=${language}&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comedy',
        items: await fetchTitles(`/discover/movie?with_genres=${categories.comedy}&language=${language}&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: 'Horror',
        items: await fetchTitles(`/discover/movie?with_genres=${categories.horror}&language=${language}&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await fetchTitles(`/discover/movie?with_genres=${categories.romance}&language=${language}&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary',
        title: 'Documentary',
        items: await fetchTitles(`/discover/movie?with_genres=${categories.documentary}&language=${language}&api_key=${API_KEY}`)
      },
    ]
  },
  getMovieInfo: async (movieId, mediaType) => {
    let info = {};

    if (movieId) {
      switch(mediaType) {
        case 'movie':
          info = await fetchTitles(`/movie/${movieId}?language=${language}&api_key=${API_KEY}`);
          break;
        case 'tv':
          info = await fetchTitles(`/tv/${movieId}?language=${language}&api_key=${API_KEY}`);
          break;
        default:
          info = null;
          break;
      }
    }

    return info;
  }
}
