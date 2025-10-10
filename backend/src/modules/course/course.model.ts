import mongoose, { Schema, Document } from "mongoose";

export interface CourseDocument extends Document {
  name: string;
  code: string;
  description?: string;
  credits?: number;
}

const courseSchema = new Schema<CourseDocument>(
  {
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    description: { type: String },
    credits: { type: Number },
  },
  { timestamps: true }
);

export const CourseModel = mongoose.model<CourseDocument>(
  "Course",
  courseSchema
);
