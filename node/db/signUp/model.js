const mongoose = require('mongoose');
const schema = require('./schema');
const model = mongoose.model('PersonsModel', schema);
module.exports = model;
