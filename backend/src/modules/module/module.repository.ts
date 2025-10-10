import { ModuleModel, ModuleDocument } from "./module.model.js";

export const ModuleRepository = {
  async getAll(): Promise<ModuleDocument[]> {
    return ModuleModel.find();
  },

  async getById(id: string): Promise<ModuleDocument | null> {
    return ModuleModel.findById(id);
  },

  async create(data: Partial<ModuleDocument>): Promise<ModuleDocument> {
    return ModuleModel.create(data);
  },

  async update(id: string, data: Partial<ModuleDocument>): Promise<ModuleDocument | null> {
    return ModuleModel.findByIdAndUpdate(id, data, { new: true });
  },

  async remove(id: string): Promise<ModuleDocument | null> {
    return ModuleModel.findByIdAndDelete(id);
  },
};
