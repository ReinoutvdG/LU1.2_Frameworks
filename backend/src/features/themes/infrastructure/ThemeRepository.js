import mongoose from "mongoose";

const themeSchema = new mongoose.Schema({
  name: String,
  description: String
});

const ThemeModel = mongoose.model("Theme", themeSchema);

export default class ThemeRepository {
  async getAll() {
    return await ThemeModel.find();
  }

  async create(data) {
    const theme = new ThemeModel(data);
    return await theme.save();
  }
}
