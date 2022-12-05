import Workout from "../models/WorkoutModel.js";

// get all the workout
const getWorkouts = async (req, res) => {
  const workout = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workout);
};

// get a single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: " the workout is not Found" });
  }

  res.status(200);
};

// create a new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  // add doc to db
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a single workout

// delete a single workout

export { createWorkout, getWorkouts, getSingleWorkout };
