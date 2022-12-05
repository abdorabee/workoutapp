import express from "express";
import {} from "dotenv/config";
import router from "./routes/workouts.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const WorkoutRoutes = router;

// express app
const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//
app.use(bodyParser.json());

//routes
app.use("/api/workouts", WorkoutRoutes);

//connect to db
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log(` connected to DB & Listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
