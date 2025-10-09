export default class Module {
  constructor({ id, name, description, ec, level, themes }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.ec = ec;
    this.level = level;
    this.themes = themes; // array van Theme ObjectIds
  }
}
