const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 3,
    max: 255,
  },
  equipment: {
    type: String,
    max: 255,
    min: 6,
  },
  avatar: {
    type: String,
    max: 1024,
    min: 6,
  },
  workout: {
    type: Array,
    max: 255,
    min: 6,
  },
  musclegroup: {
    type: Array,
    max: 255,
    min: 6,
  },
});

module.exports = mongoose.model("Exercise", exerciseSchema);
//
