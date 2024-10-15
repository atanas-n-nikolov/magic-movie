import Movie from '../models/Movie.js';

const getAll = (filter = {}) => {
  let moviesQuery = Movie.find();

  if(filter.search) {
    moviesQuery.find({ title: { $regex: filter.search, $options: 'i'} });
  };

  if(filter.genre) {
    moviesQuery.find({genre: filter.genre.toLowerCase()});
  };

  if(filter.year) {
    moviesQuery.find({year: filter.year});
  };

  return moviesQuery;
};

const getOne = (movieId) => Movie.findById(movieId).populate('casts');

const create = (movie) => Movie.create(movie);

const attach = (movieId, castId) => {
  return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
};

export default {
  getAll,
  create,
  getOne,
  attach
};