import React, {useEffect, useState} from "react";
import HomeComponent from "./HomeComponent";
import WhoToFollowList from "../WhoToFollow/WhoToFollowList";
import who from "../../reducers/data/who.json"
import CountDown from "../CountDownComponent/CountDown";
import {useHistory} from "react-router-dom";
import WeatherComponent from "../Weather/WeatherComponent";
import _ from "lodash";
import service from "../CalendarComponent/service";
import {useDispatch, useSelector} from "react-redux";
const calendarState = (state) => state.calendar;

const HomeScreen = () => {
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
            // }).catch(() => history.push('/login'));
    }
    const loggedIn = JSON.stringify(user) !== "{}"
    useEffect(getProfile, [history]);
    const dispatch = useDispatch()

    useEffect(() =>  service.findCountCalendarByPersonId(dispatch, user._id), [user]);
    const calendarObject = useSelector(calendarState);
    const getAllEvents = async () => {
        for (let i = 0; i < calendarObject.events.length; i++) {
            let id = calendarObject.events[i];
            await service.getEventById(dispatch, id);
        }
    }
    useEffect(() => getAllEvents(), [calendarObject])

    return (
        <div className={"row mt-2"}>
            <div className={"col-xxl-8 col-xl-8 col-lg-8 col-md-11 col-sm-11 mt-2 border-1 border-dark"}
                 style={{"position": "relative"}}>
                <HomeComponent user={user}/>
            </div>
            <div className={"d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4"}>
                {/*<div className="row mb-4">*/}
                {/*    <WhoToFollowList who={who}/>*/}
                {/*</div>*/}

                {loggedIn ?  <CountDown user={user}/> : <></>}

                <div className="row mt-4">
                    <WeatherComponent/>
                </div>
            </div>
        </div>
    );
};
export default HomeScreen;