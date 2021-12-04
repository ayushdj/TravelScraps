import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import ChangeProfile from "./ChangeProfile";
import service from '../service';
const selectProfile = (state) => state.profile;

const EditProfile = () => {
    const profile = useSelector(selectProfile);
    //const [editProfile, setEditProfile] = useState({});
    const dispatch = useDispatch();
    useEffect(() =>
        service.findProfileById(dispatch, "61a2a6006d05d5143f2e0acc"), [dispatch]);
    console.log(profile);
    return (
        <div className="row mt-2">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <ChangeProfile profileData={profile}/>
            </div>
        </div>
    )
}

export default EditProfile;