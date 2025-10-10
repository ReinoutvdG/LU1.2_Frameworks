import mongoose from "mongoose";

export const connectMongo = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("❌ MONGO_URI is not set in .env");

    await mongoose.connect(uri);
    console.log("✅ Connected to MongoDB Atlas");
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};
