import React, {useState, useEffect} from "react";
import ProfilePage from "../ProfileScreen/ProfilePage";
import {useHistory} from "react-router-dom";
import ScrapPostReDirect from "./ScrapPostReDirect";

const selectProfile = (state) => state.profile;

const ProfileScreenClicked = () => {
    const [user, setUser] = useState({});
    const history = useHistory();
    const getProfile = () => {
        fetch(`http://localhost:4000/api/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user);
            });
    }

    useEffect(getProfile, [history]);

    return (
        <>
            <div className="row mt-2">
                <ScrapPostReDirect/>
            </div>
        </>
    );
};
export default ProfileScreenClicked;