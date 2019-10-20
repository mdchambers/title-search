const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");

// const isAuth = require('./middleware/isAuth');
const app = express();

app.use(bodyParser.json());

// Bypass CORS protections
// Options needed for pre-flight check, as this request is a POST
app.use(cors());
app.options("*", cors());

// Authentication middleware
// app.use(isAuth);

const env = process.env.NODE_ENV || "development";
const config = require("./secret/config")[env];

const mongoUser = config.dbUser;
const mongoPwd = config.dbPwd;
const mongoDB = config.dbAddr;

const mongoURL = `mongodb+srv://${mongoUser}:${mongoPwd}${mongoDB}`;

// mongoose
//   .connect(mongoURL, { useNewUrlParser: true })
//   .then(() => {
//     app.listen(8000);
//   })
//   .catch(err => {
//     console.log("Error connecting to mongo");
//     console.log(err);
//   });

// app.get("/", (req, res, next) => {
//   res.send("hello worlds");
// });

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mike:augustus@cluster0-aimrc.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
