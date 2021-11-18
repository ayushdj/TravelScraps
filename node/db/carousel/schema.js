const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    image: String,
    location: String
}, {collection: 'carousel'});
module.exports = schema;
