import Mongoose from "mongoose";

const connectDB = async (URL) => {
  try {
    await Mongoose.connect(URL);
    console.log("db connection established");
  } catch {
    console.log("db is not connected");
  }
};

export default connectDB;
