const mongoose = require('mongoose');

const schema = mongoose.Schema;

const user = new schema({
  name: {
    type: String,
    required: true,
  },
  tweets: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Tweet'
  },
  followers: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User'
  },
  following: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User'
  }
});

const User = mongoose.model('User', user);

module.exports = { User };
