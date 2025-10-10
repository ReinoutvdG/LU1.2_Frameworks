import { CourseRepository } from "./course.repository.js";
import { CourseDocument } from "./course.model.js";

export const CourseService = {
  async getAll(): Promise<CourseDocument[]> {
    return CourseRepository.getAll();
  },

  async getById(id: string) {
    return CourseRepository.getById(id);
  },

  async create(data: Partial<CourseDocument>) {
    if (!data.name || !data.code) {
      throw new Error("Missing required fields: name and code");
    }
    return CourseRepository.create(data);
  },

  async update(id: string, data: Partial<CourseDocument>) {
    return CourseRepository.update(id, data);
  },

  async remove(id: string) {
    return CourseRepository.remove(id);
  },
};
