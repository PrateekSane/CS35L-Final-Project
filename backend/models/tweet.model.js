const mongoose = require('mongoose');

const schema = mongoose.Schema;

const tweet = new schema({
  name: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0
  },
  shares: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

const Tweet = mongoose.model('Tweet', tweet);

module.exports = { Tweet };
