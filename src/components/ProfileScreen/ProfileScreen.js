import React from "react";
import ProfilePage from "./ProfilePage";
import {useSelector} from "react-redux";

const selectProfile = (state) => state.profile;

const ProfileScreen = () => {
    const profile = useSelector(selectProfile);
    //const profileComponent = profile.edit ? <EditProfile profile={profile}/> : <ProfilePage profile={profile}/>
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