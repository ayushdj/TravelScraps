import React, {useState, useEffect} from 'react';
import {AppBar, Typography, Toolbar, Avatar, Button} from '@material-ui/core';
import {Link, useHistory, useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import decode from 'jwt-decode';
import useStyles from './styles';
import * as actionType from "../../constants/actionTypes";
import {ADMIN, emptyUser, TRAVELGUIDE, TRAVELLER} from "../../constants/userConst";

const _ = require("lodash");
const Navbar = () => {
    const location = useLocation();
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


    // const login = () => {
    //     fetch(`http://localhost:4000/api/login`, {
    //         method: 'POST',
    //         body: JSON.stringify(user),
    //         credentials: 'include',
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     }).then(() => {
    //         history.push('/home')
    //     });
    // }

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/home" className={classes.heading} variant="h6"
                            align="center"><i className="fas fa-map"/></Typography>
                <div className={classes.map}>

                </div>
            </div>
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/home" className={classes.heading} variant="h6"
                            align="center">Home</Typography>
            </div>

            {loggedIn && userType !== ADMIN ?
                <div className={classes.brandContainer}>
                    <Typography component={Link} to="/profile" className={classes.heading} variant="h6"
                                align="center">Profile</Typography>
                </div>
                : <></>
            }
            {loggedIn && userType !== ADMIN ?
                <div className={classes.brandContainer}>
                    <Typography component={Link} to="/calendar" className={classes.heading} variant="h6"
                                align="center">Calender</Typography>
                </div>
                : <></>
            }
            {/*{loggedIn ?*/}
            {/*    <div className={classes.brandContainer}>*/}
            {/*        <Typography component={Link} to="/friends" className={classes.heading} variant="h6"*/}
            {/*                    align="center">Friends</Typography>*/}
            {/*    </div>*/}
            {/*    : <></>*/}
            {/*}*/}

            {loggedIn && userType !== TRAVELLER ?
                <div className={classes.brandContainer}>
                    <Typography component={Link} to="/travelers" className={classes.heading} variant="h6"
                                align="center">{userType === TRAVELGUIDE ? "Client" : "Users"}</Typography>
                </div>

                : <></>
            }

            <div className={classes.brandContainer}>
                <Typography component={Link} to="/settings" className={classes.heading} variant="h6"
                            align="center">Settings</Typography>
            </div>

            {loggedIn && userType !== ADMIN ?
                <div className={classes.brandContainer}>
                    <Typography component={Link} to="/bookmarks" className={classes.heading} variant="h6"
                                align="center">Likes</Typography>
                </div>
                : <></>
            }
            <div>
                <Toolbar className={classes.toolbar}>
                    <div className="row">
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
                        <div className="col">
                            <label>{loggedIn ? `HELLO ${(user.firstName).toUpperCase()}` : ""}</label>
                        </div>
                    </div>
                </Toolbar>
            </div>

        </AppBar>
    );
};

export default Navbar;