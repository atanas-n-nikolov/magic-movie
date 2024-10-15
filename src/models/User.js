import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const SALT_ROUND = 10;

const userSchema = new Schema({
  user: String,
  password: {
    type: String,
    minLength: [3, 'Your password is too short!']
  },
});

userSchema.pre('save', async function() {
  const hash = await bcrypt.hash(this.password, SALT_ROUND);

  this.password = hash;
});

const User = model('User', userSchema);

export default User;