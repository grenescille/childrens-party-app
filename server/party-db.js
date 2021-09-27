const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/party_db',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) return console.log(err);
    console.log('Connected to the database');
  }
);

module.exports = mongoose;
