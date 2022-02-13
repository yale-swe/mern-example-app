import mongoose from "mongoose";
import app from "./app";

const port = process.env.PORT || 4000;
const mongoUri =
  process.env.MONGO_URI ||
  "mongodb://user:pass@localhost:27017/mydatabase?authSource=admin";

const startApp = async () => {
  try {
    await mongoose.connect(mongoUri);
    app.listen(port, () => {
      console.log(`Server is ready at: localhost:${port} 🐶`);
    });
  } catch (e) {
    console.error(`Failed to start app with error 💣: ${e}`);
  }
};

startApp();
