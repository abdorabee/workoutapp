import express from "express";
import {} from "dotenv/config";

// express app
const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.get("/", (req, res) => {
  res.json({ mssg: "It is working !!" });
});

//listen for request
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
