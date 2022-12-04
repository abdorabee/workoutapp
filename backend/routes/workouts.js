import express from "express";
import Workout from "../models/WorkoutModel.js";
const router = express.Router();

// GET all the workouts
router.get("/", (req, res) => {
  res.json({ mssg: "the get all workouts is working" });
});

//GET a single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "the get a single workout is working " });
});

// POST a new workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: " the delete is working " });
});

//UPDATE the workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: " the update  is working " });
});

export default router;
