import { connect } from "mongoose";

const dbUrl = 'mongodb://localhost:27017/Test';

export default async function mongooseInit() {
  try {
    await connect(dbUrl);
    console.log('Successfully connect to DB!');
  } catch (err) {
    console.log('Cannot connect to DB!' + err.message);
  };
};
