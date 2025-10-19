import { Router } from "express";
import { CourseService } from "./course.service.js";

const router = Router();

// GET all courses
router.get("/", async (req, res) => {
  const courses = await CourseService.getAll();
  res.json(courses);
});

// GET by ID
router.get("/:id", async (req, res) => {
  const course = await CourseService.getById(req.params.id);
  if (!course) return res.status(404).json({ message: "Course not found" });
  res.json(course);
});

// POST create new course
router.post("/", async (req, res) => {
    console.log("Ontvangen body:", req.body); // 👈 debuglijn
  try {
    const newCourse = await CourseService.create(req.body);
    res.status(201).json(newCourse);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update course
router.put("/:id", async (req, res) => {
  const updated = await CourseService.update(req.params.id, req.body);
  if (!updated) return res.status(404).json({ message: "Course not found" });
  res.json(updated);
});

// DELETE course
router.delete("/:id", async (req, res) => {
  const deleted = await CourseService.remove(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Course not found" });
  res.json({ message: "Course deleted" });
});

export default router;
