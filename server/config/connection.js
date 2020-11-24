const mongoose = require('mongoose');

// local testing
//const { MONGODB_URI } = require('../../keys');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/safeT', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
