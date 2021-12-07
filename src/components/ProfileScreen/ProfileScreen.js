import React, {useState, useEffect} from "react";
import ProfilePage from "./ProfilePage";
import {useSelector, useDispatch} from "react-redux";
import service from './service';
import {useHistory} from "react-router-dom";
const selectProfile = (state) => state.profile;

const ProfileScreen = () => {

    const [user, setUser] = useState({});
    const history = useHistory();
    const getProfile = () => {
        fetch(`http://localhost:4000/api/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user);
            }).catch(() => history.push('/login'));
    }

    useEffect(getProfile, [history]);

    console.log("USer in profile screen", user);
    return(
        <div className="row mt-2">
            <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                 style={{"position": "relative"}}>
                <ProfilePage profileData={user}/>
            </div>
        </div>
    );
};
export default ProfileScreen;