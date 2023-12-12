import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected`);
  } catch (err) {
    console.log(`MongoDB Error : ${err}`);
  }
};

export default connectDB;
