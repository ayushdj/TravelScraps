import React, {useEffect, useState} from 'react';
import "./weather.css"
import {getWeather} from "./weatherService";

const WeatherComponent = () => {
    // TODO this is read-only external api, need to make local database
    const defaultWeather = {
        location: "Denver",
        temp: "61",
        description: "Cloudy",
        humidity: "60",
        wind: "6.2"
    }
    const [weather, setWeather] = useState(defaultWeather)
    const [inputValue, setInputValue] = useState("")
    const [city, setCity] = useState("seoul")
    useEffect(() => getWeather(city, setWeather), [city])

    const handleCitySearch = () => {
        setCity(inputValue)
    }

    return (
        <>
            <div className={"mt-2"}>
                        <input type ="text"
                                    className={"weather-search-bar"}
                                    placeholder="Search By City"
                                    onChange = {(event) => setInputValue(event.target.value)}/>

                        <button className={"weather-button"} onClick={handleCitySearch}>
                            <i className={"fas fa-search pe-2 pt-1"} />
                        </button>

                <div className="weather loading">
                    <h2 className="city">Weather in {weather.location}</h2>
                    <h1 className="temp">{weather.temp}°C</h1>
                    <div className="flex">
                        <img src="https://openweathermap.org/img/wn/04n.png" alt="" className="icon"/>
                        <div className="description">{weather.description}</div>
                    </div>
                    <div className="humidity">Humidity: {weather.humidity}%</div>
                    <div className="wind">Wind speed: {weather.wind} km/h</div>
                </div>
            </div>
        </>
    );
}

export default WeatherComponent;