const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  wo_routine: [{ type: Schema.ObjectId, ref: "Workout" }],
});

module.exports = mongoose.model("User", userSchema);
