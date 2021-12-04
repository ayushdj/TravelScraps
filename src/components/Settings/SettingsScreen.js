import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import SettingsPage from "./SettingsPage";
import service from "../ProfileScreen/service";

const selectProfile = (state) => state.profile;

const SettingsScreen = () => {
    const profile = useSelector(selectProfile);
    let dispatch = useDispatch();
    useEffect(() =>
        service.findProfileById(dispatch, "61a2a6006d05d5143f2e0acc"),[]);
    console.log("This is the initial settings data: ");
    console.log(profile);

    return (
        <>
            <div className="row mt-2">
                <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                     style={{"position": "relative"}}>
                    <SettingsPage profileData={profile}/>
                </div>
            </div>
        </>
    )
}

export default SettingsScreen;