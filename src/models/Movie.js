import { kMaxLength } from "buffer";
import { Schema, model, Types } from "mongoose";

const movieSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Movie title is required!'],
    minLength: 5,
    validate: [/^[A-Za-z0-9 ]+$/, 'Title can contain only alpha numeric characters!']
  },
  genre: {
    type: String,
    required: [true, 'Movie genre is required!'],
    lowercase: true,
    validate: [/^[A-Za-z0-9 ]+$/, 'Genre can contain only alpha numeric characters!']
  },
  director: {
    type: String,
    required: [true, 'Movie director is required!'],
    validate: [/^[A-Za-z0-9 ]+$/, 'Director can contain only alpha numeric characters!']
  },
  year: {
    type: Number,
    required: [true, 'Movie year is required!'],
    min: [1900, 'Cannot add movies older then 1900'],
    max: [2024, 'Cannot add movies after 2024'],
  },
  imageUrl: {
    type: String,
    validate: [/^https?:\/\//, 'Invalid image url!'],
  },
  rating: {
    type: Number,
    required: [true, 'Movie rating is required!'],
    validate: {
      validator: function(value) {
        return Number.isInteger(value);
      },
      message: 'Rating must be a whole number.',
    },
    min: [1, 'Rating should be at least 1'],
    max: [5, 'Rating cannot be higher than 6'],
  },
  description: {
    type: String,
    required: [true, 'Movie description is required!'],
    validate: [/^[A-Za-z0-9 ]+$/, 'Description can contain only alpha numeric characters!'],
    minLength: [20, 'Description should be at least 20 characters long!'],
  },
  casts: [{
    character: {
      type: String,
      minLength: [5, 'Character should be at least 5 characters!'],
      validate: [/^[A-Za-z0-9 ]+$/, 'Invalid image url!'],
    },
    rel: {
      type: Types.ObjectId,
    ref: 'Cast'
    }
  }],
  owner: {
    type: Types.ObjectId,
    ref: 'User',
  }
});

const Movie = model('Movie', movieSchema);

export default Movie;