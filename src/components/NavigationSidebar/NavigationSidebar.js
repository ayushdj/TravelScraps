import React from "react";
import {Link} from "react-router-dom";
import './index.css';

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
                                    <a>Profile</a>
                                </div>
                            </div>
                        </li>
                    </Link>
                    <Link to="/home">
                        <li className={`list-group-item
                              ${active === 'home' ? 'active' :""}`}>
                                <div className="row">
                                    <div className="col-2">
                                        <i className="fas fa-home"/>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                                        <a>Home</a>
                                    </div>
                                </div>
                        </li>
                    </Link>

                    <Link to="/calendar">
                        <li className={`list-group-item
                              ${active === 'calendar' ? 'active' :""}`}>
                                <div className="row">
                                    <div className="col-2">
                                        <i className="fas fa-calendar"/>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                                        <a>Calender</a>
                                    </div>
                                </div>
                        </li>
                    </Link>

                    <Link to="/friends">
                        <li className={`list-group-item
                              ${active === 'friends' ? 'active' :""}`}>

                                <div className="row">
                                    <div className="col-2">
                                        <i className="fas fa-user-friends"/>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                                        <a>Friends</a>
                                    </div>
                                </div>

                        </li>
                    </Link>

                    <Link to="/likes">
                        <li className={`list-group-item
                              ${active === 'likes' ? 'active' :""}`}>

                                <div className="row">
                                    <div className="col-2">
                                        <i className="fas fa-thumbs-up"/>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                                        <a>Likes</a>
                                    </div>
                                </div>

                        </li>
                    </Link>

                    <Link to="/messages">
                        <li className={`list-group-item
                              ${active === 'messages' ? 'active' :""}`}>

                                <div className="row">
                                    <div className="col-2">
                                        <i className="fas fa-envelope"/>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                                        <a>Messages</a>
                                    </div>
                                </div>

                        </li>
                    </Link>

                    <Link to="/settings">
                        <li className={`list-group-item
                              ${active === 'settings' ? 'active' :""}`}>
                                <div className="row">
                                    <div className="col-2">
                                        <i className="fas fa-cog"/>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                                        <a>Settings</a>
                                    </div>
                                </div>
                        </li>
                    </Link>

                    <Link to="/bookmarks">
                        <li className={`list-group-item
                              ${active === 'bookmarks' ? 'active' :""}`}>
                                <div className="row">
                                    <div className="col-2">
                                        <i className="fas fa-bookmark"/>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                                        <a>Bookmarks</a>
                                    </div>
                                </div>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}
export default NavigationSidebar;
