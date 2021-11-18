const URL = 'http://localhost:5000/db/carousel/service';

export const findAllCarousels = () =>
    fetch(URL)
        .then(response => response.json());

export const deleteCarousel = (id) =>
    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    });

export const createCarousel = (carousel) =>
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(carousel),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const findCarouselById = (id) =>
    fetch(`${URL}/${id}`)
        .then(response => response.json())
        .catch(err => console.error(err));

export const updateCarousel = (carousel) =>
    fetch(`${URL}/${carousel._id}`, {
        method: 'PUT',
        body: JSON.stringify(carousel),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());


export default {
    findAllCarousels, deleteCarousel, createCarousel,
    findCarouselById, updateCarousel
};
