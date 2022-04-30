const fs = require("fs");

fs.readFile("src/SEC_4_1/test.txt", { encoding: "utf8" }, (err, context) => {
  if (err) throw console.error(err);
  console.log(context);
});
