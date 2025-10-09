import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
  name: String,
  description: String,
  ec: Number,
  level: { type: String, enum: ["NLQF-5", "NLQF-6"] },
  themes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Theme" }]
});

const ModuleModel = mongoose.model("Module", moduleSchema);

export default class ModuleRepository {
  async getAll(filter = {}) {
    return await ModuleModel.find(filter).populate("themes");
  }

  async getById(id) {
    return await ModuleModel.findById(id).populate("themes");
  }

  async create(data) {
    const module = new ModuleModel(data);
    return await module.save();
  }

  async update(id, data) {
    return await ModuleModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await ModuleModel.findByIdAndDelete(id);
  }
}
