const http = require("http");

http
  .createServer((reuest, response) => {
    response.writeHead(200, {
      "Content-Type": "text/plain",
    });
    response.write("Hello, World");
    response.end();
  })
  .listen(1337);
