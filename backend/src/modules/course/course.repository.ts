import { CourseModel, CourseDocument } from "./course.model.js";

export const CourseRepository = {
  async getAll(): Promise<CourseDocument[]> {
    return CourseModel.find();
  },

  async getById(id: string): Promise<CourseDocument | null> {
    return CourseModel.findById(id);
  },

  async create(data: Partial<CourseDocument>): Promise<CourseDocument> {
    return CourseModel.create(data);
  },

  async update(id: string, data: Partial<CourseDocument>): Promise<CourseDocument | null> {
    return CourseModel.findByIdAndUpdate(id, data, { new: true });
  },

  async remove(id: string): Promise<CourseDocument | null> {
    return CourseModel.findByIdAndDelete(id);
  },
};
