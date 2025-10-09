import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import moduleRoutes from "./features/modules/presentation/moduleRoutes.js";
import themeRoutes from "./features/themes/presentation/themeRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/modules", moduleRoutes);
app.use("/api/themes", themeRoutes);

app.listen(process.env.PORT || 5000, () =>
  console.log("Server running on port 5000")
);
