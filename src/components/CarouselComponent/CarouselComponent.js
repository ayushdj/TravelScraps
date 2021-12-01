import React, {useEffect, useState} from 'react';
import './carousel.css';
import service from './service';


const CarouselComponent = () => {
    const [slide, setSlide] = useState(0);

    // mongo data
    // all the carousels in array
    const [carousels, setCarousels] = useState([]);

    // individual carousel, if want to update
    const length = carousels.length;

    useEffect(() => {
        service.findAllCarousels()
            .then(carousels => setCarousels(carousels))
    },[]);

    // reference for creating/deleting data
    const deleteCarousel = (carousel) =>
        service.deleteCarousel(carousel._id)
            .then(() => setCarousels(
                carousels.filter(c => c !== carousel)));

    const createCarousel = () =>
        service.createCarousel({location: "", image: "http://www.portofinoselecta.com/images/joomlart/demo/default.jpg"})
            .then(actualCarousel =>
                setCarousels([
                    actualCarousel, ...carousels
                ]));



    const rightArrow = () => {
        setSlide((slide + 1) % length);
    }

    const leftArrow = () => {
        if (slide > 0) {
            setSlide(slide - 1);
        } else {
            setSlide(length - 1);
        }
    }

    return (
        <div className="wd-carousel">
            <i className="fa fa-arrow-left wd-icon-arrows" onClick={leftArrow}/>
            <> </>
            <i className="fa fa-arrow-right wd-icon-arrows" onClick={rightArrow}/>

            {carousels.map((card, key) => {
                return (
                    <div className="row wd-slide-show" key={key}>

                        <div className="col">
                            {key === slide && (
                                <div className={"card overflow-hidden rounded-3 wd-slide"}>
                                    <img className={"card-img-top rounded-3 wd-picture w-100"}
                                         src={card.image} alt={""}/>

                                    <div className={"card-img-overlay h-100 d-flex flex-column justify-content-end"}>
                                        <h5 className={"card-title text-white font-weight-bold bg-black"}>{card.location}</h5>
                                    </div>

                                </div>
                            )}

                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default CarouselComponent;