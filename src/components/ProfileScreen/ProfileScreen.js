import React from "react";
//import "./Profile.css"
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";

import ProfilePage from "./ProfilePage";
import {useSelector} from "react-redux";
import EditProfile from "./EditProfile";


const ProfileScreen = () => {
    const profile = useSelector(state => state.profile);
    //const profileComponent = profile.edit ? <EditProfile profile={profile}/> : <ProfilePage profile={profile}/>


    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                <NavigationSidebar active="profile"/>
            </div>
            <div className="col-10 col-md-10 col-lg-9 col-xl-10 col-xxl-10"
                 style={{"position": "relative"}}>
                <ProfilePage profile={profile}/>
            </div>


        </div>

    );
};
export default ProfileScreen;