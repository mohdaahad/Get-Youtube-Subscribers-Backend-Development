const express = require("express");
const app = express();

const cors = require("cors");//

app.use(cors());

//  Importing Mongoose Schema from subscribers.js
const subscriberSchema = require("./models/subscribers");


// Creating GET API which response with an array of subscribers. (an Object)
app.get("/subscribers", async (req, res) => {
  let data = await subscriberSchema.find();
  res.send(data);
});

// Creating GET API response with an array of subscribers with name and subscribed channel only. (an Object)
app.get("/subscribers/names", async (req, res) => {
  let data = await subscriberSchema.find();
  let result = data.map((item) => {
    return { name: item.name, subscribedChannel: item.subscribedChannel };
  });
  res.send(result);
});

//  Creating GET API response with a subscriber with given id. (an object)
//  and response error with status code 400 if id does not match the format.
app.get("/subscribers/:id", cors(), async (req, res, next) => {
  await subscriberSchema.find({ _id: req.params.id }, (error, result) => {
    if (error) {
      res.status(400).json({ message: "400 bad request" });
      next();
    } else if (result.length == 0) {
      res.status(400).json({ message: "400 bad request" });
      next();
    } else {
      res.status(200).json(result);
      next();
    }
  });
});


// Error Logging
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 400;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
