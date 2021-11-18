const dao = require('./dao')

module.exports = (app) => {

    const findAllCarousel = (req, res) =>
        dao.findAllCarousel()
            .then(Carousel => res.json(Carousel));

    app.get("/db/carousel/service", findAllCarousel);

    const deleteCarousel = (req, res) =>
        dao.deleteCarousel(req.params.id)
            .then((status) => res.send(status));

    app.delete("/db/carousel/service/:id", deleteCarousel);

    const createCarousel = (req, res) =>
        dao.createCarousel(req.body)
            .then((insertedCarousel) => res.json(insertedCarousel));

    app.post("/db/carousel/service", createCarousel);

    const findCarouselById = (req, res) =>
        dao.findCarouselById(req.params.id)
            .then(carousel => res.json(carousel));

    app.get("/db/carousel/service/:id", findCarouselById);

    const updateCarousel = (req, res) =>
        dao.updateCarousel(req.params.id, req.body)
            .then(status => res.send(status));

    app.put("/db/carousel/service/:id", updateCarousel);


}
