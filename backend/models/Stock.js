const mongoose = require('mongoose');

const stockSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  pictureUrl: { type: String, required: true },
});

module.exports = mongoose.model('Stock', stockSchema, 'stock');
