import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import shelters from "./config/database.js";
const app = express();

/* To handle the HTTP Methods Body Parser is used, Generally used to extract the entire body portion of an incoming request stream and exposes it on req.body
 */
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).json(shelters);
});
let port = 8000;
app.listen(port, () => {
  console.log(`Port is running at ${port}`);
});
