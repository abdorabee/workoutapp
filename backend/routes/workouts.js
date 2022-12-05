import express from "express";
import {
  createWorkout,
  getWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
} from "../controller/workoutController.js";
const router = express.Router();

// GET all the workouts
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", getSingleWorkout);

// POST a new workout
router.post("/", createWorkout);

//DELETE a workout
router.delete("/:id", deleteWorkout);

//UPDATE the workout
router.patch("/:id", updateWorkout);

export default router;
