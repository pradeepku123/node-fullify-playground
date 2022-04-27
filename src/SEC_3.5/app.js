const express = require("express");

const cors = require("cors");

const app = express();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  const info = {
    String_value: "OK",
    Ready: "!OK",
  };
  res.json(info);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
