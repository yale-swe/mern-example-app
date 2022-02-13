import express from "express";
import routes from "./routes";

const app = express()
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(routes);

export default app;
