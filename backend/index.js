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
  // error checking
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json("Required username / password not in body");

  const cur = await User.findOne({ username: username });
  if (cur) return res.status(200).json("Username already exists");

  const newUser = new User({
    username: username,
    password: password,
  });

  newUser.save().catch((err) => res.status(400).json(err));

  console.log(`Successfully created ${newUser}`);
  return res.status(200).json({ newUser });
});

app.post("/loginUser", async (req, res) => {
  // error checking
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json("Required username / password not in body");

  const cur = await User.findOne({ username: username });

  if (!cur) return res.status(200).json("user doesn't exist");

  let validLogin;
  console.log(cur);
  password === cur.password ? (validLogin = true) : (validLogin = false);
  console.log(validLogin);
  validLogin
    ? res.status(200).json(cur)
    : res.status(200).json("incorrect password");
});

app.delete("/deleteAllUsers", async (req, res) => {
  User.deleteMany({})
    .then((data) => res.status(200).json(data))
    .catch((err) => console.log(err));
});

app.get("/getAllUsers", async (req, res) => {
  User.find({})
    .then((data) => res.status(200).json(data))
    .catch((err) => console.log(err));
});

app.get("/getUser/:id", async (req, res) => {
  User.find({ _id: req.params.id })
    .then((data) => res.status(200).json(data))
    .catch((err) => console.log(err));
});

app.listen(5000, () => {
  console.log("backend connnected to port 5000");
});
