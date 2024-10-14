import Movie from '../models/Movie.js';

const getAll = async (filter = {}) => {
  let movies = await Movie.find();

  if(filter.search) {
    movies = movies.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()));
  };

  if(filter.genre) {
    movies = movies.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase());
  };

  if(filter.year) {
    movies = movies.filter(movie => movie.year === filter.year);
  };

  return movies;
};

const getOne = (movieId) => Movie.findById(movieId);

const create = (movie) => Movie.create(movie);

export default {
  getAll,
  create,
  getOne
};