import {useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import service from "../components/ScrapPosts/service";
import PostItem from "../components/ScrapPosts/PostItem";
import {useHistory} from "react-router-dom";


const detailsState = (state) => state.details;

const Details = () => {
    const details = useSelector(detailsState);
    const {cityInfo, weather} = details
    console.log("details", details)
    const history = useHistory();

    const [posts, setPosts] = useState([]);
    useEffect(() => service.findAllPosts()
        .then(posts => setPosts(posts.filter(post => post.location.toLowerCase().includes(cityInfo.name.toLowerCase()) ))), [history]);


    const displayCityDetails = () => {
        return <>
            <h1>{cityInfo.name}, {cityInfo.country}</h1>
            <h5>population: {cityInfo.population}</h5>
            <h5>coordinate: {cityInfo.coord.lat} {cityInfo.coord.lon}</h5>
        </>
    }

    const displayWeatherDetails = () => {
        return <>
            <h5>Weather</h5>
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{weather.date}</h5>
            </div>
            <p className="mb-1">
                temp: {weather.temp} <br/>
                Humidity: {weather.humidity} <br/>
                wind: {weather.wind} <br/>
            </p>
            <small className="text-primary">{weather.description}</small>
        </>
    }

    const displayEventDetails = () => {
        return <>
            <h5>Day {weather.count} Events</h5>

            {weather.userEvent.map(e =>
            <div className="card bg-primary mb-2 text-black ps-2">
                {e.title}
            </div>
        )}
        </>
    }
    const [user, setUser] = useState({});
    const getProfile = () => {
        fetch(`http://localhost:4000/api/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user);
            })
    }
    const loggedIn = JSON.stringify(user) !== "{}"
    useEffect(getProfile, [history]);

    const displayPostDetails = () => {
        return <>
            <h5>Posts related to {cityInfo.name}</h5>
            <ul className="list-group">
                {
                    posts.map((post, key) =>
                        <PostItem loggedIn={loggedIn} postData={post} user={user} key={key}/>
                    )
                }
            </ul>
        </>
    }

    return(
        <div>
            {displayCityDetails()}
            <br/>
            {displayWeatherDetails()}
            <br/>
            <br/>
            {displayEventDetails()}
            <br/>
            {displayPostDetails()}
        </div>
    )
}

export default Details;