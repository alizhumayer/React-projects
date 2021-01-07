const router = require("express").Router();
const Exercise = require("../model/Exercise");
const schemaReg = require("../validate_registration");
const schemaLogin = require("../validate_login");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

//SHOW EXERCISES WITH :EQUIPMENT
router.get("/single/:id", async (req, res) => {
  const { id } = req.params;

  console.log(id);
  const showExercises = await Exercise.findOne({ _id: id }).limit(1);
  if (!showExercises)
    return res
      .status(400)
      .send("Something went wrong or no exercises available");
  res.status(200).send(showExercises);
});

router.post("/add", async (req, res) => {
  //CREATE NEW EXERCISE

  const exercise = new Exercise({
    name: req.body.name,
    equipment: req.body.equipment,
    avatar: req.body.avatar,
    workout: req.body.workout,
    musclegroup: req.body.musclegroup,
  });

  try {
    const savedExercise = await exercise.save();
    res.send("Created Exercise(s)");
    console.log(savedExercise);
    if (savedExercise) {
      console.log(savedExercise);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

//SHOW EXERCISES WITH :EQUIPMENT
router.get("/:equipment", async (req, res) => {
  const { equipment } = req.params;

  const showExercises = await Exercise.find({ equipment });
  if (!showExercises)
    return res
      .status(400)
      .send("Something went wrong or no exercises available");
  res.status(200).send(showExercises);
});

//SHOW OPTIONS (musclegroups to choose) WITH SPECIFIC :EQUIPMENT
router.get("/:equipment/options", async (req, res) => {
  const { equipment } = req.params;

  const showExercises = await Exercise.find({ equipment }).distinct(
    "musclegroup"
  );
  if (!showExercises)
    return res
      .status(400)
      .send("Something went wrong or no exercises available");
  res.status(200).send(showExercises);
});
//
//SHOW EXERCISES WITH :EQUIPMENT && :MUSCLEGROUP
router.get("/:equipment/:musclegroup", async (req, res) => {
  const { musclegroup, equipment } = req.params;

  const showExercises = await Exercise.find({
    equipment: equipment,
    musclegroup: [musclegroup],
  });
  if (!showExercises)
    return res
      .status(400)
      .send("Something went wrong or no exercises available");
  res.status(200).send(showExercises);
});

//SHOW EXERCISES
router.get("/", async (req, res) => {
  const showExercises = await Exercise.find({});
  if (!showExercises)
    return res
      .status(400)
      .send("Something went wrong or no exercises available");
  res.status(200).send(showExercises);
});

module.exports = router;
