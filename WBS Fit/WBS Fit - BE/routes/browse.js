const router = require("express").Router();
const Workout = require("../model/Workout");
// const User = require("../model/User");

router.get("/:workouttype", async (req, res) => {
  // console.log("workout type : ", type);

  const { workouttype } = req.params;
  //
  console.log("reqparams :", req.params);
  console.log("type :", workouttype);

  const showFilteredWorkouts = await Workout.find({
    wo_type: workouttype,
  });
  if (!showFilteredWorkouts)
    return res
      .status(400)
      .send("Something went wrong or no exercises available");
  res.status(200).send(showFilteredWorkouts);
});

module.exports = router;
