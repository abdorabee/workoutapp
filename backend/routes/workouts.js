import express from "express";

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
router.post("/", (req, res) => {
  res.json({ mssg: " the post is working " });
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
