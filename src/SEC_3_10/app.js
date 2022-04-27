const express = require("express");

const app = express();

//Get /names/John
app.get("/names/:name", (req, res, next) => {
  if (req.params.name === "John") {
    console.log("John is here");
    res.send("Hello John");
  } else {
    next(new Error("Name Not Found"));
  }
});
app.use((err, req, res, next) => {
  console.log(err.message);
  return res.status(500).send("Internal Server Error");
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
