import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'home'
    }) => {
    return (
        <div>
            <div className="nav-bar">
                <ul className="list-group">
                    <Link to="/profile">
                        <li className={`list-group-item
                              ${active === 'profile' ? 'active' :""}`}>
                            <div className="row">
                                <div className="col-2">
                                    <i className=" fas fa-map"/>
                                </div>
                                <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                                    <label>Profile</label>
                                </div>
                            </div>
                        </li>
                    </Link>
                    <li className={`list-group-item
                          ${active === 'home' ? 'active' :""}`}>
                            <div className="row">
                                <div className="col-2">
                                    <i className="fas fa-home"/>
                                </div>
                                <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                                    <label>Home</label>
                                </div>
                            </div>
                    </li>

                    <li className={`list-group-item
                          ${active === 'calendar' ? 'active' :""}`}>
                            <div className="row">
                                <div className="col-2">
                                    <i className="fas fa-calendar"/>
                                </div>
                                <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                                    <label>Calender</label>
                                </div>
                            </div>
                    </li>

                    <li className={`list-group-item
                          ${active === 'friends' ? 'active' :""}`}>
                        <a href="/" className="text-white">
                            <div className="row">
                                <div className="col-2">
                                    <i className="fas fa-user-friends"/>
                                </div>
                                <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                                    <label>Friends</label>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li className={`list-group-item
                          ${active === 'likes' ? 'active' :""}`}>
                        <a href="/" className="text-white">
                            <div className="row">
                                <div className="col-2">
                                    <i className="fas fa-thumbs-up"/>
                                </div>
                                <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                                    <label>Likes</label>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li className={`list-group-item
                          ${active === 'messages' ? 'active' :""}`}>
                        <a href="/" className="text-white">
                            <div className="row">
                                <div className="col-2">
                                    <i className="fas fa-envelope"/>
                                </div>
                                <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                                    <label>Messages</label>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li className={`list-group-item
                          ${active === 'settings' ? 'active' :""}`}>
                        <a href="/" className="text-white">
                            <div className="row">
                                <div className="col-2">
                                    <i className="fas fa-cog"/>
                                </div>
                                <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                                    <label>Settings</label>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li className={`list-group-item
                          ${active === 'bookmarks' ? 'active' :""}`}>
                        <a href="/" className="text-white">
                            <div className="row">
                                <div className="col-2">
                                    <i className="fas fa-bookmark"/>
                                </div>
                                <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                                    <label>Bookmarks</label>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default NavigationSidebar;
