import cors from "cors";
import express from "express";
import { isCI, isDevelopment, isTest } from "./utils/environment";
import routes from "./routes";

const bypassCors = isCI() || isDevelopment() || isTest();
const allowList = new Set(["http://localhost:3000"]);

const corsOptions = {
  origin: (origin: string, callback: any) => {
    if (bypassCors || allowList.has(origin)) {
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
