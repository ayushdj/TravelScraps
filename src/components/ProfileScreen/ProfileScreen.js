import React, {useState, useEffect} from "react";
import ProfilePage from "./ProfilePage";
import {useSelector, useDispatch} from "react-redux";
import service from './service';
const selectProfile = (state) => state.profile;

const ProfileScreen = () => {

    const profile = useSelector(selectProfile);
    const dispatch = useDispatch();
    useEffect(() =>
        service.findProfileById(dispatch, "61a2a6006d05d5143f2e0acc"));

    return(
        <div className="row mt-2">
            <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                 style={{"position": "relative"}}>
                <ProfilePage profileData={profile}/>
            </div>
        </div>
    );
};
export default ProfileScreen;