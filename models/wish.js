const mongoose = require('mongoose');

const wishSchema = mongoose.Schema({
  wish: String,
});

mongoose.model('wishes', wishSchema);
