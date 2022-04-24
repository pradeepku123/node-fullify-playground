const express = require("express");

module.exports = function (options = {}) {
  const router = express.Router();
  router.get("/greet", (req, res, next) => {
    res.end(options.greetings);
  });
  router.get("/ok", (req, res, next) => {
    console.log("/ok called");
    res.end("OK Called");
  });
  router.use("*", (req, res, next) => {
    console.log("PLZ verify PATH notfound");
    res.end("Not Implemented");
  });
  return router;
};
