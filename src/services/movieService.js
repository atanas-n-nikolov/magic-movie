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

const getOne = (movieId) => Movie.findById(movieId).populate('casts.rel');

const create = (movie, ownerId) => Movie.create({...movie, owner: ownerId});

const attach = (movieId, castId, character) => {
  return Movie.findByIdAndUpdate(movieId, { $push: { casts: { rel: castId, character } } });
};

const remove = (movieId) => Movie.findByIdAndDelete(movieId);

export default {
  getAll,
  create,
  getOne,
  attach,
  remove
};