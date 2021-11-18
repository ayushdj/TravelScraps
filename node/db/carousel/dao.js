const model = require('./model');

const findAllCarousel = () => model.find();

const deleteCarousel = (id) =>
    model.deleteOne({_id: id});

const createCarousel = (carousel) =>
    model.create(carousel);

const findCarouselById = (id) =>
    model.findById(id);

const updateCarousel = (id, carousel) =>
    model.updateOne({_id: id},
        {$set: carousel});


module.exports = {
    findAllCarousel, deleteCarousel, createCarousel,
    findCarouselById, updateCarousel
};


