const mongoose = require("mongoose");
const { number } = require("@hapi/joi");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    min: 3,
    max: 255,
  },
  picture: {
    type: String,
    max: 255,
    min: 6,
  },
  description: {
    type: String,
    max: 1024,
    min: 6,
  },
  wo_type: {
    type: String,
    max: 1024,
    min: 6,
  },
  ratings: {
    type: [Number],
    max: 5,
    min: 0,
  },
  exercises: [{ type: Schema.ObjectId, ref: "Exercise" }],

  standardSet: [
    {
      exercise_id: { type: Schema.ObjectId },
      exercise_name: { type: String },
      exercise_avatar: { type: String },
      reps: { type: Number, max: 25, min: 1 },
      weight: { type: Number, max: 400, min: 0 },
      sets: { type: Number, max: 15, min: 1 },
    },
  ],

  creator: { type: Schema.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Workout", workoutSchema);
//
