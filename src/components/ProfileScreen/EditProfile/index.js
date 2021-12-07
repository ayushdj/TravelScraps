import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import ChangeProfile from "./ChangeProfile";
import service from '../service';
import {useHistory} from "react-router-dom";
const selectProfile = (state) => state.profile;

const EditProfile = () => {

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

    console.log("USer in edit screen", user);
    return (
        <div className="row mt-2">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <ChangeProfile profileData={user}/>
            </div>
        </div>
    )
}

export default EditProfile;