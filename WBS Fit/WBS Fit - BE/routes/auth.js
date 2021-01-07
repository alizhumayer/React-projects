const router = require("express").Router();
const User = require("../model/User");
const schemaReg = require("../validate_registration");
const schemaLogin = require("../validate_login");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");
//
router.post("/register", async (req, res) => {
  // //VAL THE DATA BEFORE STORING USERDATA

  const { error } = schemaReg.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  //CHECK IF USER EXISTS

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already registered");

  //HASH PASSWORDS
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //CREATE NEW USER

  const user = new User({
    first_name: req.body.first_name,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
    if (savedUser) {
      console.log("created a new user");
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  //VAL THE DATA BEFORE STORING USERDATA

  console.log("connected to /login");
  console.log("req.body : ", req.body);

  const { error } = schemaLogin.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);
  // console.log(error);
  //CHECK IF EMAIL ALREADY EXISTS
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email or Password is wrong");
  //CHECK IF PASSWORD IS CORRECT
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Email or Password is wrong");
  //PASSWORD IS GOOD
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);

  console.log("Login successful : ", user._id);
});

//SHOW USER INFORMATION
router.get("/me/:id", async (req, res) => {
  const { id } = req.params;
  const me = await User.findById(id, { password: 0 }).populate({
    path: "wo_routine",
    populate: { path: "exercises", select: "-workout" },
  });
  if (!me) return res.status(400).send("I do not exist");
  res.status(200).send(me);
});

module.exports = router;
