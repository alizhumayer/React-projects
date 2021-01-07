const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const porto = process.env.PORT || 5000;

// var createError = require("http-errors");

var indexRouter = require("./routes/index");
var sendmailRouter = require("./routes/sendmail");

app.use(cors());

app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use("/", indexRouter);
app.use("/sendmail", sendmailRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

app.listen(porto, () =>
  console.log(`Backend of PORTFOLIO is running on ${porto}`)
);

module.exports = app;
