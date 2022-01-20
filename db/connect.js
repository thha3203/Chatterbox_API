const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/testdb', {
  useNewUrlParser: true
});

db
  .then(db => console.log('DB Connected'))
  .catch(err => console.log('ERROR', err));

module.exports = db;