const fs = require("fs");
// import path from "path";
const path = require("path");
//Encodind Should be Specified other wise we get Buffred Data during File Operation
fs.readFile(
  path.resolve(__dirname, "test.txt"),
  { encoding: "utf8" },
  (err, context) => {
    if (err) throw console.error(err);
    console.log(context);
  }
);
