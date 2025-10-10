import mongoose, { Schema, Document } from "mongoose";

export interface ModuleDocument extends Document {
  name: string;
  description: string;
  ec: 15 | 30;
  level: "NLQF-5" | "NLQF-6";
  education: string;
}

const moduleSchema = new Schema<ModuleDocument>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    ec: { type: Number, required: true, enum: [15, 30] },
    level: { type: String, required: true, enum: ["NLQF-5", "NLQF-6"] },
    education: { type: String, required: true },
  },
  { timestamps: true }
);

export const ModuleModel = mongoose.model<ModuleDocument>(
  "Module",
  moduleSchema
);
