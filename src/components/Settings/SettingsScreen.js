import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import SettingsPage from "./SettingsPage";
import service from "../ProfileScreen/service";
import {useHistory} from "react-router-dom";
import {emptyUser} from "../../constants/userConst";


const SettingsScreen = () => {
    const history = useHistory();
    let dispatch = useDispatch();



    const [user, setUser] = useState(emptyUser);
    const getProfile = () => {
        fetch(`http://localhost:4000/api/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user);
            })
    }
    console.log("This is the initial settings data: ", user);
    useEffect(getProfile, [history]);

    return (
        <>
            <div className="row mt-2">
                <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                     style={{"position": "relative"}}>
                    <SettingsPage profileData={user}/>
                </div>
            </div>
        </>
    )
}

export default SettingsScreen;