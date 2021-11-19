const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password: String,
    dateOfBirth: Date
}, {collection: 'persons'});
module.exports = schema;
