const express = require("express");
const userApi = require("./user/userApi");
const userService = require("./user/userService");
const userRepository = require("./user/userRepository");
const meterApi = require("./meter/meterApi");
const meterService = require("./meter/meterService");
const meterRepository = require("./meter/meterRepository");
// todo: use a test version that returns stubbed data
const testRepository = require("./meter/meterRepository");
const logger = require("./logger");
const emailSender = require("./emailSender");

const app = express();
const myLogger = logger();
const myUserService = userService( // customer api
  userRepository(myLogger),
  emailSender(myLogger),
  myLogger
);
const myMeterService = meterService(meterRepository(myLogger), myLogger); // smets
const myUserApi = userApi(myLogger, myUserService);
const myMeterApi = meterApi(myLogger, myMeterService);

// http://localhost:8000/users?id=1000
app.get("/users", myUserApi.getUserHandler);

// http://localhost:8000/meters?id=1000
app.get("/meters", myMeterApi.getMeterHandler);

const PORT = 8000;
app.listen(PORT, () => console.log(`listening to port: ${PORT}`));

// todo: typescript, interfaces, TSOA controllers, middleware

// **************************************************
// todo: integration testing (show value of injection)
// **************************************************

// ramda, lodash-fp

// goals of functional programs - pure functions - (pass all args-in, so function can be stateless)
