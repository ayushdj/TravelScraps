import React from "react";
//import "./Profile.css"

import ProfilePage from "./ProfilePage";
import {useSelector} from "react-redux";

const selectProfile = (state) => state.profile;

const ProfileScreen = () => {
    const profile = useSelector(selectProfile);
    //const profileComponent = profile.edit ? <EditProfile profile={profile}/> : <ProfilePage profile={profile}/>
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">

            </div>
            <div className="col-10 col-md-10 col-lg-9 col-xl-10 col-xxl-10"
                 style={{"position": "relative"}}>
                <ProfilePage profileData={profile}/>
            </div>
        </div>

    );
};
export default ProfileScreen;