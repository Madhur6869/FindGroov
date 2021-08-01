const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const port = 3000;
const app = express();
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("land");
});
app.get("/find", (req, res) => {
  res.render("find");
});
app.get("/detect", (req, res) => {
  res.render("detect.ejs");
});

app.listen(port, () => {
  console.log("Serving on port 3000");
});
