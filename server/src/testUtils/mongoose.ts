import mongoose from "mongoose";

const mongoUri =
  process.env.MONGO_URI ||
  "mongodb://user:pass@127.0.0.1:27017/mydatabase?authSource=admin";

export const connectMongoose = async () => mongoose.connect(mongoUri);
export const disconnectMongoose = async () => mongoose.disconnect();
