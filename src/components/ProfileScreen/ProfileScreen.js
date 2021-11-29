import React, {useState, useEffect} from "react";
import ProfilePage from "./ProfilePage";
import {useSelector, useDispatch} from "react-redux";
import service from './service';
const selectProfile = (state) => state.profile;

const ProfileScreen = () => {
    const profile = useSelector(selectProfile);
    //const profileComponent = profile.edit ? <EditProfile profile={profile}/> : <ProfilePage profile={profile}/>
    //const [profileData, setProfileData] = useState({});
    const dispatch = useDispatch();
    useEffect(() =>
        service.findProfileById(dispatch, "61980994e90e9b8ebc1d30fd"));

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