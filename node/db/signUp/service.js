const dao = require('./dao')

module.exports = (app) => {

    const createPerson = (req, res) =>
        dao.createPerson(req.body)
            .then((insertedPerson) => res.json(insertedPerson));

    app.post("/db/person/service", createPerson);

}
