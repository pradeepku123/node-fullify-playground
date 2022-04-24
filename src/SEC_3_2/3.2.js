const express = require("express");

const app = express();

app
  .route("/routeEG")
  .get((req, res) => {
    console.log("/GET called");
    res.send("This is /GET");
  })
  .post((req, res) => {
    console.log("/GET called");
    res.send("This is /POST");
  })
  .put((req, res) => {
    console.log("/GET called");
    res.send("This is /PUT");
  });
app.use("*", (req, res) => {
  console.log("path not implemented");
  res.send("path not implemented");
});

app.listen("8080", () => {
  console.log("app lostioning PORT 8080");
});
