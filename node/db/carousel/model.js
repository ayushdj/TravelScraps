const mongoose = require('mongoose');
const schema = require('./schema');
const model = mongoose.model('CarouselModel', schema);
module.exports = model;
