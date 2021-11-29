const model = require('./model');


const createPerson = (person) =>
    model.create(person);

module.exports = {
    createPerson
};


