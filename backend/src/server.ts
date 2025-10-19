import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectMongo } from "./core/database/mongo.js";
import moduleRouter from "./modules/module/module.controller.js";
import courseRouter from "./modules/course/course.controller.js";

dotenv.config();

export const createServer = async () => {
  await connectMongo();

  const app = express();
  app.use(express.json());

  app.use(cors({
    origin: "http://localhost:5173", // de frontend-URL
  }));

  // module routes
  app.use("/api/modules", moduleRouter);

  // courses route
  app.use("/api/courses", courseRouter);

    const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "public")));

  //alle onbekende routes naar index.html
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

  return app;
};
