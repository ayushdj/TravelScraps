import React from "react"
import "./home.css"
import CarouselComponent from "../CarouselComponent/CarouselComponent";
import ScrapPosts from "../ScrapPosts";

const HomeComponent = ({user}) => {
    return (
        <div>
            <div className={"row mb-5 me-3"}>
                <div className={"col-11 mb-1 w-100"}>
                    <div><label><i className={"fas fa-search"}/></label></div>
                    <div><input type="text"
                                className={"form-control rounded-pill wd-search-twitter"}
                                placeholder="Search TravelScraps"/></div>
                </div>
            </div>
            <div className={"row mb-5"}>
                <div>
                    <CarouselComponent/>
                </div>
            </div>
            <ScrapPosts user={user}/>
        </div>
    );
}
export default HomeComponent;