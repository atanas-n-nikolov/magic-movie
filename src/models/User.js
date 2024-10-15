import { Schema, model, Types } from "mongoose";
import bcrypt from 'bcrypt';

const SALT_ROUND = 10;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    validate: [/[@A-Za-z0-9]+.[A-Za-z0-9]+$/, 'Invalid email address!'],
    minLength: [10, 'Email is too short!'],
  },
  password: {
    type: String,
    validate: [/^[A-Za-z0-9]+$/, 'Invalid password characters!'],
    minLength: [6, 'Your password is too short!']
  },
});

userSchema.virtual('rePassword').set(function(value) {
  if(value !== this.password) {
    throw new Error('Password missmatch!');
  };
});

userSchema.pre('save', async function() {
  const hash = await bcrypt.hash(this.password, SALT_ROUND);

  this.password = hash;
});

const User = model('User', userSchema);

export default User;