export default class ModuleController {
  constructor(moduleService) {
    this.moduleService = moduleService;
  }

  async getAll(req, res) {
    const filters = {};
    if (req.query.level) filters.level = req.query.level;
    if (req.query.ec) filters.ec = req.query.ec;
    res.json(await this.moduleService.listModules(filters));
  }

  async create(req, res) {
    const module = await this.moduleService.createModule(req.body);
    res.status(201).json(module);
  }

  async update(req, res) {
    const module = await this.moduleService.updateModule(req.params.id, req.body);
    res.json(module);
  }

  async delete(req, res) {
    await this.moduleService.deleteModule(req.params.id);
    res.sendStatus(204);
  }
}
