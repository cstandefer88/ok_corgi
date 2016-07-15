var mongoose = require('mongoose');
var random = require('mongoose-simple-random');

var corgiSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image_url: String,
  interests: String,
  age: Number,
  liked: Boolean
});

corgiSchema.plugin(random);
var Corgi = mongoose.model('Corgi', corgiSchema);

module.exports = Corgi;
