import React from "react";
import {useDispatch} from "react-redux";
import "../index.css"
import EditProfile from "../EditProfile";
import {Link} from "react-router-dom";

const ProfilePage = ({profileData}) => {

    const dispatch = useDispatch();
    // const editProfileClickHandler = () => {
    //     dispatch({type: 'edit-profile', profile});
    // }

    const formatDate = (dateString) => {
        switch (dateString.split("/").length) {
            case 2:
                const dateSplit = dateString.split("/")
                const newDateString = dateSplit[0] + "/1/" + dateSplit[1]
                return new Date(newDateString).toLocaleDateString('en-us', {month:"long", year:"numeric"})
            default:
                return new Date(dateString).toLocaleDateString('en-us', {month:"long", day:"numeric", year:"numeric"})

        }
    }

    return(
        <div>
            <div className="row">
                <div className="col-1">
                    <i className="fas fa-arrow-left fa-1x"/>

                </div>
                <div className="col-11">
                    <div className="wd-emphasis">{profileData.firstName} {profileData.lastName}</div>
                    <div className="wd-normal">5196 Tweets</div>
                </div>

            </div>
            <div>
                <div className="position-relative">
                    <img className="pos-absolute w-100" src="../../../images/banner-default.jpg" alt="banner"/>

                    <div className="pos-profile wd-zindex-bring-to-front">
                        <img className="rounded-circle wd-profile border wd-white-ex"
                             src="../../../images/profile-default.png" alt="profile"/>
                    </div>
                </div>

                <Link to="/edit-profile">
                    <div className="mt-2 float-end"><a className="btn btn-outline-dark wd-round">Edit Profile</a></div>
                </Link>

                <br/><br/>
                <div className="mt-5">
                    <div>
                        <div className="wd-emphasis">{profileData.firstName} {profileData.lastName}</div>
                        <div className="wd-normal">@{profileData.handle}</div>
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

                            <span className="me-4">
                                        <i className="far fa-calendar pe-1"/>
                                        {profileData.dateJoined}
                                    </span>

                        </div>

                        <div className="wd-normal">
                            <span className="pe-2"><b className="text-white">{profileData.followingCount}</b> Following</span>
                            <b className="text-white">{profileData.followersCount}</b> Followers</div>
                    </div>
                </div>
                <br/>

            </div>


            <h2>Screen size</h2>
            <div className="d-block d-sm-none fa-2x">XS</div>
            <div className="d-none d-sm-block d-md-none fa-2x">S</div>
            <div className="d-none d-md-block d-lg-none fa-2x">M</div>
            <div className="d-none d-lg-block d-xl-none fa-2x">L</div>
            <div className="d-none d-xl-block d-xxl-none fa-2x">XL</div>
            <div className="d-none d-xxl-block fa-2x">XXL</div>

        </div>
    );
}
export default ProfilePage;