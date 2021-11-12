import React from "react";
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";
import {useSelector} from "react-redux";
import ChangeProfile from "./ChangeProfile";

const selectProfile = (state) => state.profile;

const EditProfile = () => {
    const profile = useSelector(selectProfile);
    return (
        <div className="row py-5">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                <NavigationSidebar active="profile"/>
            </div>
            <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                <ChangeProfile profileData={profile}/>
            </div>
        </div>
    )
}

export default EditProfile;