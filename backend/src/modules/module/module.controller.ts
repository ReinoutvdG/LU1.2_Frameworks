import { Router } from "express";
import { ModuleService } from "./module.service.js";

const router = Router();

// GET all modules
router.get("/", async (req, res) => {
  const modules = await ModuleService.getAll();
  res.json(modules);
});

// GET by ID
router.get("/:id", async (req, res) => {
  const module = await ModuleService.getById(req.params.id);
  if (!module) return res.status(404).json({ message: "Module not found" });
  res.json(module);
});

// POST create new module
router.post("/", async (req, res) => {
  try {
    const newModule = await ModuleService.create(req.body);
    res.status(201).json(newModule);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update module
router.put("/:id", async (req, res) => {
  const updated = await ModuleService.update(req.params.id, req.body);
  if (!updated) return res.status(404).json({ message: "Module not found" });
  res.json(updated);
});

// DELETE module
router.delete("/:id", async (req, res) => {
  const deleted = await ModuleService.remove(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Module not found" });
  res.json({ message: "Module deleted" });
});

export default router;
