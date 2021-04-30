const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("MongoDB connected");
});
/*
Create routes in the following format. Replace things indicated by ##:
app.#whatever your http req is#('/#address of whatever (e.g. /getUserTweets)#', () => {
    do your actions here. If you need to connect to mongoDB you need to a have a schema in the models folder.
})
*/

app.listen(5000, () => {
  console.log("backend connnected to port 5000");
});
