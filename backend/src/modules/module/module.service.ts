import { ModuleRepository } from "./module.repository.js";
import { ModuleDocument } from "./module.model.js";

export const ModuleService = {
  async getAll(): Promise<ModuleDocument[]> {
    return ModuleRepository.getAll();
  },

  async getById(id: string) {
    return ModuleRepository.getById(id);
  },

  async create(data: Partial<ModuleDocument>) {
    if (!data.name || !data.description || !data.ec || !data.level || !data.education) {
      throw new Error("Missing required fields");
    }
    return ModuleRepository.create(data);
  },

  async update(id: string, data: Partial<ModuleDocument>) {
    return ModuleRepository.update(id, data);
  },

  async remove(id: string) {
    return ModuleRepository.remove(id);
  },
};
