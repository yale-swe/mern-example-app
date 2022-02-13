import mongoose from "mongoose";
import app from "./app";
import routes from "./routes";

const startApp = async () => {
  try {
    await mongoose.connect(
      "mongodb://user:pass@localhost:27017/mydatabase?authSource=admin"
    );
    const port = process.env.PORT || 4000;

    app.use(routes);

    app.listen(port, () => {
      console.log(`Server is ready at: localhost:${port} 🐶`);
    });
  } catch (e) {
    console.error(`Failed to start app with error 💣: ${e}`);
  }
};

startApp();
