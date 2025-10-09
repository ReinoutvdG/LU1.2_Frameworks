import express from "express";
import ModuleRepository from "../infrastructure/ModuleRepository.js";
import ModuleService from "../application/ModuleService.js";
import ModuleController from "./ModuleController.js";

const router = express.Router();

const repo = new ModuleRepository();
const service = new ModuleService(repo);
const controller = new ModuleController(service);

router.get("/", (req, res) => controller.getAll(req, res));
router.post("/", (req, res) => controller.create(req, res));
router.put("/:id", (req, res) => controller.update(req, res));
router.delete("/:id", (req, res) => controller.delete(req, res));

export default router;
