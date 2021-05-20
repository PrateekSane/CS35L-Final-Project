const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user.model");
const Tweet = require("./models/tweet.model");
require("dotenv").config();

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

app.post("/createUser", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
  });
  newUser.save().catch((err) => res.status(400).json(err));
  return res.status(200).json({ newUser });
});

app.post("/loginUser", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const cur = await User.findOne({ username: username }).catch((err) =>
    res.status(401).json("user doesnt exist" + err)
  );
  let validLogin;
  console.log(cur);
  password === cur.password ? (validLogin = true) : (validLogin = false);
  res.status(200).json({ valid: validLogin });
});

app.delete("/deleteAllUsers", (req, res) => {
  User.deleteMany({})
    .then((data) => res.status(200).json(data))
    .catch((err) => console.log(err));
});

app.get("/getAllUsers", (req, res) => {
  User.find({})
    .then((data) => res.status(200).json(data))
    .catch((err) => console.log(err));
});
app.listen(5000, () => {
  console.log("backend connnected to port 5000");
});
