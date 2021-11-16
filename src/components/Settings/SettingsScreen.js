import React from 'react';
import {useSelector} from "react-redux";
import SettingsPage from "./SettingsPage";

const selectProfile = (state) => state.profile;


const SettingsScreen = () => {
    const profile = useSelector(selectProfile);
    return (
        <>
            <div className="row mt-2">
                <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                     style={{"position": "relative"}}>
                    <SettingsPage profileData={profile}/>
                </div>
            </div>
        </>
    )
}

export default SettingsScreen;