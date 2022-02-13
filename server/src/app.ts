import cors from "cors";
import express from "express";
import { isDevelopment } from "./utils/environment";
import routes from "./routes";

const allowList = new Set(["http://localhost:3000"]);
const corsOptions = {
  origin: (origin: string, callback: any) => {
    if (isDevelopment() || allowList.has(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

const app = express()
  .use(cors(corsOptions))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(routes);

export default app;
