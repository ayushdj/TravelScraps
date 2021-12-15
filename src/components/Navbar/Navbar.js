import React, {useEffect, useState} from 'react';
import image from './logo.png';
import './logo.css';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from './navLinkStyles';
import {Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import {ADMIN, TRAVELGUIDE, TRAVELLER} from "../../constants/userConst";

import useStyles from "./login_logout_styles";

const Navbar = () => {
    const classes = useStyles();
    const [userType, setUserType] = useState(TRAVELLER);
    const [user, setUser] = useState({});
    const history = useHistory();
    const getProfile = () => {
        fetch(`http://localhost:4000/api/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user);
                setUserType(user.type);
            })
    }

    const loggedIn = JSON.stringify(user) !== "{}"
    const handleLoginLogout = () => {
        if (loggedIn) {
            logout()
        } else {
            history.push("/login")
        }
    }


    const logout = () => {
        fetch(`http://localhost:4000/api/logout`, {
            method: 'POST',
            credentials: 'include'
        }).then(() => {
            history.push('/logIn');
            window.location.reload();
        });

    }
    useEffect(getProfile, [history]);

    return (
        <>
            <Nav>
                <Bars/>
                <NavMenu className={"mb-3 mt-2"}>
                    <NavLink to='/home' className="pe-2">
                        <img src={image} style={{width : "50px", height: "50px"}}/>
                    </NavLink>
                    <NavLink to='/home' activeStyle variant="h6">
                        Home
                    </NavLink>

                    {loggedIn && userType !== ADMIN ?
                     <NavLink to='/profile' activeStyle variant="h6">
                         Profile
                     </NavLink> : <></>
                    }

                    {loggedIn && userType !== ADMIN ?
                     <NavLink to='/calendar' activeStyle variant="h6">
                         Calendar
                     </NavLink> : <></>
                    }

                    {loggedIn && userType !== TRAVELLER ?
                     <NavLink to='/travelers' activeStyle variant="h6">
                         {userType === TRAVELGUIDE ? "Client" : "Users"}
                     </NavLink> : <></>
                    }

                    {loggedIn && userType !== ADMIN ?
                     <NavLink to='/search' activeStyle variant="h6">
                         Weather
                     </NavLink> : <></>
                    }

                     <NavLink to='/settings' activeStyle variant="h6">
                        Settings
                    </NavLink>

                    <div className="row">
                        <div className="col">
                            <label>{loggedIn ? `HELLO ${(user.firstName).toUpperCase()}` : ""}</label>
                        </div>
                        <div className="col">
                            <div>
                                {loggedIn ?
                                 <Button variant="contained" color="secondary" className={classes.logoutButton}
                                         onClick={handleLoginLogout}>Logout</Button>
                                          :
                                 <Button variant="contained" color="primary" className={classes.logoutButton}
                                         onClick={handleLoginLogout}>Login</Button>}
                            </div>
                        </div>
                    </div>

                </NavMenu>

            </Nav>
        </>
    );
};

export default Navbar;