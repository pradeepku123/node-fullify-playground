const express = require("express");
const greetMiddleware = require("./greet.js");

const app = express();

app.use("/api/v1/", greetMiddleware({ greetings: "Hello Sir" }));

app.listen("8080", () => {
  console.log("Listion port::8080");
});
