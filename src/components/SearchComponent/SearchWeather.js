import {useHistory, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import service from "../CalendarComponent/service";
import {getMultipleWeather} from "../Weather/weatherService";
import {useDispatch, useSelector} from "react-redux";
const calendarState = (state) => state.calendar;
const eventsState = (state) => state.events;

const SearchWeather = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { criteria } = useParams()
    const [weatherList, setWeatherList] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [cityInfo, setCityInfo] = useState({})

    const [user, setUser] = useState({});
    const eventArray = useSelector(eventsState);
    const calendarObject = useSelector(calendarState);

    useEffect(() => {
        console.log(`criteria is ${criteria}`)
        if (criteria) {
            console.log("network call called")
            getMultipleWeather(criteria, setWeatherList, eventArray, history, setCityInfo)
        }}, [eventArray])

    const handleCitySearch = () => {
        history.push(`/search/${inputValue}`)
        window.location.reload()
    }

    const getProfile = () => {
        fetch(`http://localhost:4000/api/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user);
            })

    }
    const populateData = async () => {
        for (let i = 0; i < calendarObject.events.length; i++) {
            let id = calendarObject.events[i];
            await service.getEventById(dispatch, id);
        }
    }

    useEffect(getProfile, [history]);
    useEffect(() =>  service.findCountCalendarByPersonId(dispatch, user._id), [user]);
    useEffect(() => populateData(), [calendarObject]);


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

    const displayUserEventCards = (userEvent) => {
        return userEvent.map(e =>
            <div className="card bg-primary mb-2">
                event: {e.title}
            </div>
            )
    }

    const displayWeatherResult = () => {
        return weatherList.map(weather =>
            <>
                <a onClick={(event) => {
                    const details = {weather, cityInfo}
                    dispatch({ type: "update-details", details});
                    history.push(`/details/${criteria}`)
                }} className="list-group-item list-group-item-action flex-column align-items-start">

                <div className={"row"}>
                    <div className={"col-8"}>
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{weather.date}</h5>
                            <small className="text-muted">Day {weather.count}</small>
                        </div>
                        <p className="mb-1">
                            temp: {weather.temp}°C <br/>
                            Humidity: {weather.humidity}%<br/>
                            wind: {weather.wind}km/h<br/>
                        </p>
                        <small className="text-primary">{weather.description}</small>
                    </div>
                    <div className={"col-4"}>
                        {weather.userEvent.length > 0 ? displayUserEventCards(weather.userEvent) : <></>}
                    </div>
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