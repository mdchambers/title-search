import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import * as cors from "cors";
import apiRouter from "./routes";

const app = express();

app.use(bodyParser.json());

// Bypass CORS protections
// Options needed for pre-flight check, as this request is a POST
app.use(cors());
app.options("*", cors());

app.use(express.static("public"));
app.use(apiRouter);

const env = process.env.NODE_ENV || "development";

let mongoURL = "";
//// Configuration for access to MongoDB database
// For security reasons, credentials are not stored in this file
// To input your own security credentials, fill out and uncomment, or supply your own mongodb url below:

//// UNCOMMENT TO USE CREDENTIALS DIRECTLY
// const config = {
//   // Username
//   mongoUser: '',
//   //Password
//   mongoPwd: '',
//   // URI
//   mongoDb: ''
// }

//// OR UNCOMMENT TO READ CREDENTIALS FROM FILE
// Alternatively read mongodb credentials from config file
// const config = require("./config/config")[env];

//// UNCOMMENT TO CONSTRUCT MONGO STRING
// mongoURL = `mongodb://${config.mongoUser}:${config.mongoPwd}${config.mongoDb}`;

//// OR UNCOMMENT TO ENTER DIRECTLY
// mongoURL = "<urlstring";

//// USING HEROKU CONFIG VARS
mongoURL = process.env.MONGO;

// Connect to database and launch express
mongoose
  .connect(mongoURL, { useNewUrlParser: true })
  .then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server listening on port: ${port}`));
  })
  .catch(err => {
    console.log("Error connecting to mongo");
    console.log(err);
  });
