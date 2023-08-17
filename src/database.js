const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notes-db-app')
  .then(db => console.log('DB Is Connected'))
  .catch(err => console.log('Error Connecting', err));