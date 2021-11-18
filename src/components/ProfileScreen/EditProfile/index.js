import React from "react";
import {useSelector} from "react-redux";
import ChangeProfile from "./ChangeProfile";

const selectProfile = (state) => state.profile;

const EditProfile = () => {
    const profile = useSelector(selectProfile);
    return (
        <div className="row mt-2">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <ChangeProfile profileData={profile}/>
            </div>
        </div>
    )
}

export default EditProfile;