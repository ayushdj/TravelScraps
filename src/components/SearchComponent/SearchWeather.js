import {Link, useHistory} from "react-router-dom";
import React, {useEffect, useState} from "react";
import service from "../CalendarComponent/service";
import profileService from "../ProfileScreen/service";

import {TRAVELGUIDE, TRAVELLER} from "../../constants/userConst";
import {getMultipleWeather, getWeather} from "../Weather/weatherService";

const TYPE_URL = 'http://localhost:4000/db/type';

const SearchWeather = () => {
    const [weatherList, setWeatherList] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [city, setCity] = useState("seoul")
    useEffect(() => {
        if (city !== "") {
            getMultipleWeather(city, setWeatherList)
        }}, [city])


    console.log("weather list ", weatherList)

    const handleCitySearch = () => {
        setCity(inputValue)
    }

    const [user, setUser] = useState({});
    const history = useHistory();
    const getProfile = () => {
        fetch(`http://localhost:4000/api/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user);
            })

    }
    useEffect(getProfile, [history]);
    console.log("this is weather search site")


    // const [travelers, setTravelers] = useState([]);
    // useEffect(() => service.findByType(TRAVELLER, setTravelers), [history])
    //
    // const [guides, setGuides] = useState([]);
    // useEffect(() => service.findByType(TRAVELGUIDE, setGuides), [history])
    //
    // const [allUsers, setAllUsers] = useState([]);
    // useEffect(async () => await setAllUsers([...guides,  ...travelers]), [travelers]);

    const displaySearchBar = () => {
        return <>
            <input type ="text"
                   className={"weather-search-bar"}
                   placeholder="Search By City"
                   onChange = {(event) => setInputValue(event.target.value)}/>

            <button className={"weather-button"} onClick={handleCitySearch}>
                <i className={"fas fa-search pe-2 pt-1"} />
            </button>
        </>
    }

    const displayWeatherResult = () => {
        return weatherList.map(weather =>
            <>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">

                <div className={"row"}>
                    <div className={"col-8"}>
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{weather.date}</h5>
                            <small className="text-muted">Day 1</small>
                        </div>
                    </div>
                    <div className="col-4 card bg-primary">
                        This is some text within a card body.
                    </div>
                        <p className="mb-1">
                            temp: {weather.temp} <br/>
                            Humidity: {weather.humidity} <br/>
                            wind: {weather.wind} <br/>
                        </p>
                        <small className="text-primary">{weather.description}</small>


                </div>
                </a>
            </>
            )
    }

    return (
        <>
            {displaySearchBar()}
            <br/>
            <br/>
            {displayWeatherResult()}
        </>
    )

}
export default SearchWeather;