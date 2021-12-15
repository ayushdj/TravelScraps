import React from "react";
import "../index.css";
import {Link} from "react-router-dom";

const ProfilePage = ({profileData}) => {

    return (
        <div>
            <div className="row">
                <div className="col-1">
                    <Link to="/home">
                        <i className="fas fa-arrow-left fa-1x text-white"/>
                    </Link>

                </div>
                <div className="col-11">
                    <div className="wd-emphasis">{profileData.firstName} {profileData.lastName}</div>
                    {/*<div className="wd-normal">5196 Tweets</div>*/}
                </div>

            </div>
            <div>
                <div className="position-relative">
                    <img className="pos-absolute w-100" src={profileData.bannerPicture} alt="banner"/>

                    <div className="pos-profile wd-zindex-bring-to-front">
                        <img className="rounded-circle wd-profile border wd-white-ex"
                             src={profileData.profilePicture} alt="profile"/>
                    </div>
                </div>

                <Link to="/edit-profile">
                    <div className="mt-2 float-end"><a className="btn btn-outline-dark wd-round">Edit Profile</a></div>
                </Link>

                <br/><br/>
                <div className="mt-5">
                    <div>
                        <div className="wd-emphasis">{profileData.firstName} {profileData.lastName}</div>
                        <div className="wd-normal">@{profileData.userName}</div>
                        <p className="wd-paragraph pt-2">
                            {profileData.bio}
                        </p>

                        <div className="wd-normal pb-2">
                                    <span className="me-4">
                                        <i className="fas fa-map-marker-alt pe-1"/>
                                        {profileData.location}
                                    </span>

                            <span className="me-4">
                                        <i className="fas fa-birthday-cake pe-1"/>
                                {profileData.dateOfBirth}
                                    </span>

                        </div>
                    </div>
                </div>
                <br/>
            </div>
        </div>
    );
}
export default ProfilePage;