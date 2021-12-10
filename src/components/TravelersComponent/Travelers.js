import {Link, useHistory} from "react-router-dom";
import React, {useEffect, useState} from "react";
import service from "../CalendarComponent/service";
import profileService from "../ProfileScreen/service";

import {TRAVELGUIDE, TRAVELLER} from "../../constants/userConst";

const TYPE_URL = 'http://localhost:4000/db/type';

const Travelers = () => {
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
    const loggedIn = JSON.stringify(user) !== "{}"
    useEffect(getProfile, [history]);


    const findByType = (type, setTravelers) => {
        fetch(`${TYPE_URL}/${type}`)
            .then(response => response.json())
            .then(travelers => setTravelers(travelers))
    }

    const [travelers, setTravelers] = useState([]);
    useEffect(() => service.findByType(TRAVELLER, setTravelers), [history])

    const [guides, setGuides] = useState([]);
    useEffect(() => service.findByType(TRAVELGUIDE, setGuides), [history])

    const [allUsers, setAllUsers] = useState([]);
    useEffect(async () => await setAllUsers([...guides,  ...travelers]), [travelers]);

    return (
        <>
            {user.type === TRAVELGUIDE
                    ? <ul id="person-list" className="list-group">
                        {travelers.map((person) => <li className={"list-group-item"} value={person._id}>{person.userName}</li>)}
                    </ul> :
                    <ul id="person-list" className="list-group">
                        {allUsers.map((person) =>
                            <li  className={"list-group-item"} value={person._id}>
                                <div className={"row"}>
                                    <div className={"col-11"}>
                                         {person.userName}
                                    </div>
                                    <div className="col-1" onClick={() => {
                                        profileService.deleteProfile(person._id)
                                        window.location.reload();
                                    }}>
                                        <i className="fas fa-times"/>
                                    </div>
                                </div>
                            </li>)}
                    </ul>
            }
        </>
    )

}
export default Travelers;