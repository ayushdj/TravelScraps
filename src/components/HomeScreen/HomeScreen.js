import React from "react";
import HomeComponent from "./HomeComponent";
import WhoToFollowList from "../WhoToFollow/WhoToFollowList";
import who from "../../reducers/data/who.json"
import CountDown from "../CountDownComponent/CountDown";
import WeatherComponent from "../Weather/WeatherComponent";

const HomeScreen = () => {
    return (
        <div className={"row mt-2"}>
            <div className={"col-xxl-8 col-xl-8 col-lg-8 col-md-11 col-sm-11 mt-2 border-1 border-dark"}
                 style={{"position": "relative"}}>
                <HomeComponent/>
            </div>
            <div className={"d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4"}>
                <div className="row mb-4">
                    <WhoToFollowList who={who}/>
                </div>
                <div className="row mt-4">
                    <CountDown/>
                </div>
                <div className="row mt-4">
                    <WeatherComponent/>
                </div>
            </div>
        </div>
    );
};
export default HomeScreen;