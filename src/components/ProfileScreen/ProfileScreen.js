import React, {useState, useEffect} from "react";
import ProfilePage from "./ProfilePage";
import {useSelector, useDispatch} from "react-redux";
import service from './service';
const selectProfile = (state) => state.profile;

const ProfileScreen = () => {

    const profile = useSelector(selectProfile);
    useEffect(() => profile);

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