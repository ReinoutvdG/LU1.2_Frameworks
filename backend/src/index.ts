// src/index.ts
import dotenv from "dotenv";
import { createServer } from "./server.js"; // let op: .js als je transpileert naar JS
dotenv.config();

const PORT = process.env.PORT || 5000;

const start = async () => {
  const app = await createServer(); // ⬅️ dit komt uit server.ts
  app.listen(PORT, () => {
    console.log(`✅ Server draait op poort ${PORT}`);
  });
};

start();
