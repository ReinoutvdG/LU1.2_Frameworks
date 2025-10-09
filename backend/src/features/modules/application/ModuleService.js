export default class ModuleService {
  constructor(moduleRepository) {
    this.moduleRepository = moduleRepository;
  }

  async listModules(filters = {}) {
    return await this.moduleRepository.getAll(filters);
  }

  async createModule(data) {
    return await this.moduleRepository.create(data);
  }

  async updateModule(id, data) {
    return await this.moduleRepository.update(id, data);
  }

  async deleteModule(id) {
    return await this.moduleRepository.delete(id);
  }
}
