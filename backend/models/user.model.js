const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tweets: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Tweet",
  },
  followers: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
  },
  following: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
  },
  likedTweets: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Tweet",
  },
  sharedTweets: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Tweet",
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
