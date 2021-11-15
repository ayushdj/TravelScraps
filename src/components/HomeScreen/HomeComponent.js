import React from "react"
import "./home.css"
import CarouselComponent from "../CarouselComponent/CarouselComponent";

const HomeComponent = () => {
    return(
        <div>
            <div className={"row mb-5 me-3"}>
                <div className={"col-11 mb-1 w-100"}>
                    <div><label><i className={"fas fa-search"} /></label></div>
                    <div><input type ="text"
                                className={"form-control rounded-pill wd-search-twitter"}
                                placeholder="Search TravelScraps"/></div>
                </div>
            </div>
            <div className={"row mb-5"}>
                <div>
                    <CarouselComponent/>
                </div>
            </div>
            <div className={"row mb-5"}>
                <div className={"col-6 mt-2 mb-1"}>
                    <div>Recommendations</div>

                </div>
                <div className={"col-6 mt-2 mb-1"}>
                    <div>Next Scrapventure</div>

                </div>
            </div>
        </div>
    );
}
export default HomeComponent;