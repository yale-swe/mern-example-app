import mongoose from "mongoose";
import app from "./app";

const startApp = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydatabase");
    const port = process.env.PORT || 4000;

    app.listen(port, () => {
      console.log(`Server is ready at: localhost:${port} 🐶`);
    });
  } catch (e) {
    console.error(`Failed to start app with error 💣: ${e}`);
  }
};

startApp();
