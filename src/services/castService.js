import Cast from '../models/Cast.js';

const getAll = () => Cast.find();

const getAllWithout = (casts = []) => {
  const castId = casts.map(cast => cast.rel._id);

  return Cast.find({_id: {$nin: castId}});
};

const create = (cast) => Cast.create(cast);

export default {
  create,
  getAll,
  getAllWithout,
};