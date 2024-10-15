import { Schema, model } from "mongoose";

const castSchema = new Schema({
  name: {
    type: String,
    minLength: [5, 'Name should be at least 5 characters long'],
    validate: [/^[A-Za-z0-9 ]+$/, 'Invalid name characters!'],
  },
  age: {
    type: Number,
    min: [1, 'Age should be at least 1'],
    max: [120, 'Age should be lower then 120'],
  },
  born: {
    type: String,
    minLength: [10, 'Born should be at least 10 characters long.'],
    validate: [/^[A-Za-z0-9 ]+$/, 'Invalid type characters!'],
  },
  imageUrl: {
    type: String,
    validate: [/^https?:\/\//, 'Invalid image url!'],
  },
});

const Cast = model('Cast', castSchema);

export default Cast;