const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const cookiParser = require("cookie-parser");

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookiParser());

app.get("/setcookies", (req, res) => {
  console.log("Setup Cookies");
  res.cookie("name", "John", {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  });
  return res.send("Cookies Set");
});

app.get("/getcookies", (req, res) => {
  console.log("Get Cookies");
  console.log(req.cookies);
  res.send("Cookies Get");
});

app.post("/testbodyparser", (req, res) => {
  console.log(req.body["test"]);
  res.send("Body Parser Test");
});
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
