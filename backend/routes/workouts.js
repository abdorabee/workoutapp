import express from "express";
import {
  createWorkout,
  getWorkouts,
  getSingleWorkout,
} from "../controller/workoutController.js";
const router = express.Router();

// GET all the workouts
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", getSingleWorkout);

// POST a new workout
router.post("/", createWorkout);

//DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: " the delete is working " });
});

//UPDATE the workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: " the update  is working " });
});

export default router;
