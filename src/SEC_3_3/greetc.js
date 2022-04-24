const express = require("express");

module.exports = function (options = {}) {
  const router = express.Router();
  const { service } = options;
  router.get("/greet", (req, res) => {
    console.log("req.query", req.query);
    res.end(service.createGreeting(req.query.name || "stranger"));
  });
  return router;
};
