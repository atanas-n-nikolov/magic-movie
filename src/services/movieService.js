import uniqid from 'uniqid';
import movieData from "../data/movieData.js";

const getAll = () => movieData.getAll();

const getOne = async (movieId) => {
  const movies = await movieData.getAll();

  const resultMovie = movies.find(movie => movie.id === movieId);

  return resultMovie;
};

const create = (movie) => {
  movie.id = uniqid();
  movie.rating = Number(movie.rating);
  
  return movieData.create(movie); 
};

export default {
  getAll,
  create,
  getOne
};