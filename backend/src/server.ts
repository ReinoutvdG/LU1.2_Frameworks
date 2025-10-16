import express from "express";
import dotenv from "dotenv";
import { connectMongo } from "./core/database/mongo.js";
import moduleRouter from "./modules/module/module.controller.js";
import courseRouter from "./modules/course/course.controller.js";

dotenv.config();

export const createServer = async () => {
  await connectMongo();

  const app = express();
  app.use(express.json());

  // basis route
  app.get("/", (req, res) => {
    res.send("✅ Backend draait");
  });

  // module routes
  app.use("/api/modules", moduleRouter);

  // nieuwe courses route
  app.use("/api/courses", courseRouter);

  return app;
};
