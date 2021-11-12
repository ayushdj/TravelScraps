import React from 'react';
import './index.css';

const ProfileScreen = () => {
    return (
        <>

            <div className="container mt-3">
                <div className="row">

                    <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
                        <div className="nav flex-column nav-pills border border-gray rounded" id="v-pills-tab"
                             role="tablist" aria-orientation="vertical">
                            <div className="border-bottom border-gray"><a className="nav-link wd-override-bl"
                                                                          data-toggle="pill" href="#"><i className="fab fa-twitter"/></a></div>
                            <div className="border-bottom border-gray"><a className="nav-link wd-override-bl"
                                                                          data-toggle="pill" href="#"><i
                                className="fas fa-home"></i>
                                <div className="d-xl-inline-block d-lg-none d-md-none d-sm-none d-xs-none">Home</div>
                            </a></div>
                            <div><a className="nav-link active rounded-0" id="v-pills-home-tab" data-toggle="pill"
                                    href="#"><i className="fa fa-hashtag"></i>
                                <div className="d-xl-inline-block d-lg-none d-md-none d-sm-none d-xs-none">Explore</div>
                            </a></div>

                            <div className="border-bottom border-gray"><a className="nav-link wd-override-bl"
                                                                          data-toggle="pill" href="#"><i
                                className="fa fa-bell"></i>
                                <div
                                    className="d-xl-inline-block d-lg-none d-md-none d-sm-none d-xs-none">Notifications
                                </div>
                            </a></div>
                            <div className="border-bottom border-gray"><a className="nav-link wd-override-bl"
                                                                          data-toggle="pill" href="#"><i
                                className="fa fa-envelope"></i>
                                <div className="d-xl-inline-block d-lg-none d-md-none d-sm-none d-xs-none">Messages
                                </div>
                            </a></div>
                            <div className="border-bottom border-gray"><a className="nav-link wd-override-bl"
                                                                          data-toggle="pill" href="#"><i
                                className="fa fa-bookmark"></i>
                                <div className="d-xl-inline-block d-lg-none d-md-none d-sm-none d-xs-none">Bookmarks
                                </div>
                            </a></div>
                            <div className="border-bottom border-gray"><a className="nav-link wd-override-bl"
                                                                          data-toggle="pill" href="#"><i
                                className="fa fa-list"></i>
                                <div className="d-xl-inline-block d-lg-none d-md-none d-sm-none d-xs-none">Lists</div>
                            </a></div>
                            <div className="border-bottom border-gray"><a className="nav-link wd-override-bl"
                                                                          data-toggle="pill" href="#"><i
                                className="fa fa-user"></i>
                                <div className="d-xl-inline-block d-lg-none d-md-none d-sm-none d-xs-none">Profile</div>
                            </a></div>
                            <a className="nav-link wd-override-bl" data-toggle="pill" href="#"><span
                                className="iconify wd-black" data-icon="gridicons:ellipsis-circle"></span>
                                <div className="d-xl-inline-block d-lg-none d-md-none d-sm-none d-xs-none">More</div>
                            </a>
                        </div>

                        <a className="mt-2 btn btn-primary wd-round d-flex justify-content-center" href="#"
                           role="button">Tweet</a>

                    </div>


                    <div className="col-xxl-10 col-xl-10 col-lg-11 col-md-10 col-sm-10 border">


                        <div className="position-relative">
                            <img className="pos-absolute w-100" src="../images/banner-default.jpg" alt="banner"/>

                            <div className="pos-profile wd-zindex-bring-to-front">
                                <img className="rounded-circle wd-profile border wd-white-ex"
                                     src="../images/profile-default.png" alt="profile"/>
                            </div>
                        </div>

                        <div className="mt-2 float-end"><a className="btn btn-primary wd-round" href="#">Edit
                            Profile</a></div>


                        <br/>
                        <br/>
                        <br/>

                        <div>
                            <div className="ms-5">
                                <h2>James Wan</h2>
                                Travel addict
                                <br/>
                                Boston Massachusetts
                                <br/>
                                <b>123</b> Following <b>234</b> Followers

                                <div className="mt-4">
                                    <h4>Biography</h4>
                                    <p>
                                        I traveled 10 different countries within the last 7 years. My favorite city is
                                        Vancouver.
                                        I am a big food addict and I like hiking in natural parks. Connect with me!
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <h4>Birthday</h4>
                                    <p>
                                        12/31/2002
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <h4>Email</h4>
                                    <p>
                                        iamrandom@gmail.com
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <h4>Phone Number</h4>
                                    <p>
                                        023-2345-2020
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <h4>Phone Number</h4>
                                    <p>
                                        023-2345-2020
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <h4>Scrapbooks</h4>
                                    <p>
                                        cardview
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <h4>Scrapbooks</h4>
                                    <p>
                                        bookmark
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <h4>Scrapbooks</h4>
                                    <p>
                                        likes
                                    </p>
                                </div>


                            </div>
                        </div>


                        <h2>Screensize</h2>
                        <div className="d-block d-sm-none fa-2x">XS</div>
                        <div className="d-none d-sm-block d-md-none fa-2x">S</div>
                        <div className="d-none d-md-block d-lg-none fa-2x">M</div>
                        <div className="d-none d-lg-block d-xl-none fa-2x">L</div>
                        <div className="d-none d-xl-block d-xxl-none fa-2x">XL</div>
                        <div className="d-none d-xxl-block fa-2x">XXL</div>


                    </div>

                </div>
            </div>

        </>
    )
}

export default ProfileScreen;