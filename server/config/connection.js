const mongoose = require('mongoose');

// local testing
const { MONGODB_URI } = require('../../keys');

mongoose.connect(
  MONGODB_URI || 'mongodb://localhost/safeT', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
