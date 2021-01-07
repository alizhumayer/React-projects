const router = require("express").Router();
const Exercise = require("../model/Exercise");

//SHOW EXERCISES
router.get("/", async (req, res) => {
  const showEquipment = await Exercise.distinct("equipment");
  if (!showEquipment)
    return res
      .status(400)
      .send("Something went wrong or no equipment available");
  res.status(200).send(showEquipment);
});

module.exports = router;
//
