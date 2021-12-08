import React, {useState, useEffect} from 'react';
import {AppBar, Typography, Toolbar, Avatar, Button} from '@material-ui/core';
import {Link, useHistory, useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import decode from 'jwt-decode';

import useStyles from './styles';
import * as actionType from "../../constants/actionTypes";
const _ = require("lodash");
const Navbar = () => {
    const location = useLocation();
    const classes = useStyles();
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

    const loggedIn = JSON.stringify(user) !== "{}"

    console.log("User in the nav bar: ", user);
    const login = () => {
        fetch(`http://localhost:4000/api/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(() => {
            history.push('/home')
        });
    }

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

            {loggedIn ?
                <div className={classes.brandContainer}>
                    <Typography component={Link} to="/profile" className={classes.heading} variant="h6"
                                align="center">Profile</Typography>
                </div>
                : <></>
            }
            { loggedIn ?
                <div className={classes.brandContainer}>
                    <Typography component={Link} to="/calendar" className={classes.heading} variant="h6"
                                align="center">Calender</Typography>
                </div>
                : <></>
            }
            { loggedIn ?
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/friends" className={classes.heading} variant="h6"
                            align="center">Friends</Typography>
            </div>
                : <></>
            }

            { loggedIn ?
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/messages" className={classes.heading} variant="h6"
                            align="center">Messages</Typography>
            </div>
                : <></>
            }
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/settings" className={classes.heading} variant="h6"
                            align="center">Settings</Typography>
            </div>

            { loggedIn ?
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/bookmarks" className={classes.heading} variant="h6"
                            align="center">Bookmarks</Typography>
            </div>
                : <></>
            }
            <div>
                <Toolbar className={classes.toolbar}>
                    {_.isEqual({}, user) ? (
                        <div/>
                    ) : (
                        <div className="row">
                            <div className="col">
                                <Button variant="contained"  color="secondary"
                                        onClick={logout}>Logout</Button>
                            </div>
                            <div className="col">
                                <label>HELLO {(user.firstName).toUpperCase()}</label>
                            </div>
                        </div>
                    )
                    }
                </Toolbar>
            </div>

            {/*<div className={classes.brandContainer}>*/}
            {/*    <Toolbar className={classes.toolbar}>*/}
            {/*        {user?.result ? (*/}
            {/*            <div className={classes.profile}>*/}
            {/*                <Avatar className={classes.purple} alt={user?.result.name}*/}
            {/*                        src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>*/}
            {/*                <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>*/}
            {/*                <Button variant="contained" className={classes.logout} color="secondary"*/}
            {/*                        onClick={logout}>Logout</Button>*/}
            {/*            </div>*/}
            {/*        ) : (*/}
            {/*            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>*/}
            {/*        )}*/}
            {/*    </Toolbar>*/}
            {/*</div>*/}
        </AppBar>
    );
};

export default Navbar;