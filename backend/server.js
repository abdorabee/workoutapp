import express from "express";
import {} from "dotenv/config";
import router from "./routes/workouts.js";

const WorkoutRoutes = router;

// express app
const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", WorkoutRoutes);

//listen for request
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
