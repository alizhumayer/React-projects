const router = require("express").Router();
const Workout = require("../model/Workout");
const Exercise = require("../model/Exercise");
const User = require("../model/User");

//
//CREATE NEW WORKOUT
router.post("/add", async (req, res) => {
  // console.log(typeof req.body.standardSet[0].reps);
  const UserID = "5f083fa8891ad414a8d97cf4";

  const workout = await new Workout({
    name: req.body.name,
    picture: req.body.picture,
    description: req.body.description,
    wo_type: req.body.wo_type,
    ratings: req.body.ratings,
    exercises: req.body.exercises,
    standardSet: req.body.standardSet,
    creator: UserID,
  });

  workout.save((err, workout) => {
    if (err) {
      console.log(err);
      return res.send({ errorcode: "Workout creation failed", err });
    } else {
      //   console.log("Saved Workout ID : ", workout.id);
      console.log("Workout created : ", workout._id);
      Exercise.find({ _id: { $in: req.body.exercises } }).exec(
        (err, getExerciseIds) => {
          if (getExerciseIds && !err) {
            getExerciseIds.map((item) => {
              Exercise.findOneAndUpdate(
                { _id: item._id },
                { $push: { workout: workout.id } }
              ).exec((err) => {
                if (err) console.log(err);
                else {
                  console.log("Updated Exercises collection");
                }
              });
            });
          }
        }
      );

      User.findOneAndUpdate(
        { _id: UserID },
        { $push: { wo_routine: workout } }
      ).exec((err) => {
        if (err) return res.send(err);
        else console.log("Workout was put into User Routine :", workout.id);
      });
    }
  });
});

router.get("/top5", async (req, res) => {
  const top5 = await Workout.aggregate([
    {
      $addFields: {
        totalRating: {
          $reduce: {
            input: "$ratings",
            initialValue: 0,
            in: { $add: ["$$value", "$$this"] },
          },
        },
        numberOfRatings: { $size: "$ratings" },
        average: { $round: [{ $avg: "$ratings" }, 1] },
      },
    },
    { $sort: { numberOfRatings: -1, average: -1 } },
    { $limit: 5 },
  ]);
  return res.json(top5);
});
//
module.exports = router;
