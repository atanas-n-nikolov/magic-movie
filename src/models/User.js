import { Schema, model } from "mongoose";

const userSchema = new Schema({
  user: String,
  password: String,
});

const User = model('User', userSchema);

export default User;