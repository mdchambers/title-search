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
const config = require("./config/config")[env];

const mongoUser = config.dbUser;
const mongoPwd = config.dbPwd;
const mongoDB = config.dbAddr;

const mongoURL = `mongodb://${mongoUser}:${mongoPwd}${mongoDB}`;

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
