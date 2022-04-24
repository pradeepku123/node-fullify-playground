const express = require("express");

const greetMiddleware = require("./greetc.js");

class GreetingService {
  constructor(greeting = "Hello") {
    this.greeting = greeting;
  }
  createGreeting(name) {
    return `${this.greeting} ${name}!`;
  }
}

const app = express();

app.use(
  "/api/v1/service1",
  greetMiddleware({
    service: new GreetingService("Hello"),
  })
);

app.use(
  "/api/v1/service2",
  greetMiddleware({
    service: new GreetingService("Hi"),
  })
);

app.listen("8080", () => {
  console.log("Server started on port 8080");
});
