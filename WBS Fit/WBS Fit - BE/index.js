const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// import routes
const authRoute = require("./routes/auth");
const exerciseRoute = require("./routes/exercise");
const equipmentRoute = require("./routes/equipment");
const musclegroupRoute = require("./routes/musclegroup");
const workoutRoute = require("./routes/workout");
const browseRoute = require("./routes/browse");
const cors = require("cors");

dotenv.config();
mongoose.set("useUnifiedTopology", true);

//connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("DB Connection established")
);

app.use(cors());

//Middleware
app.use(express.json());

//route middleware
app.use("/api/user", authRoute);
app.use("/api/user/routine/:id", authRoute); // show User's Workout Routine
app.use("/api/exercise", exerciseRoute); // show all exercises in DB
app.use("/api/single/:id", exerciseRoute); // GET specific exercise

app.use("/api/exercise/:equipment", exerciseRoute); //show all exercises filtered by equipment
app.use("/api/exercise/:equipment/:musclegroup", exerciseRoute); //show all exercises filtered by equipment&musclegroup

app.use("/api/equipment", equipmentRoute); // show all equipment categories
app.use("/api/musclegroup", musclegroupRoute); // show all musclegroup categories

app.use("/api/workout", workoutRoute);
app.use("/api/browse/", browseRoute);

app.listen(process.env.PORT || 5000, () =>
  console.log(
    `Backend of FINAL-PROJECT is running on Port : ${process.env.PORT}`
  )
);
