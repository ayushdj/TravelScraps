import React, {useState, useEffect} from 'react';
import {AppBar, Typography, Toolbar, Avatar, Button} from '@material-ui/core';
import {Link, useHistory, useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import decode from 'jwt-decode';

import useStyles from './styles';
import * as actionType from "../../constants/actionTypes";

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();

    const logout = () => {
        dispatch({type: actionType.LOGOUT});

        history.push('/auth');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <div className={classes.map}>
                    <i className="fas fa-map"/>
                </div>
            </div>
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/home" className={classes.heading} variant="h6"
                            align="center">Home</Typography>
            </div>
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/profile" className={classes.heading} variant="h6"
                            align="center">Profile</Typography>
            </div>
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/calendar" className={classes.heading} variant="h6"
                            align="center">Calender</Typography>
            </div>
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/friends" className={classes.heading} variant="h6"
                            align="center">Friends</Typography>
            </div>
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/messages" className={classes.heading} variant="h6"
                            align="center">Messages</Typography>
            </div>
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/settings" className={classes.heading} variant="h6"
                            align="center">Settings</Typography>
            </div>
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/bookmarks" className={classes.heading} variant="h6"
                            align="center">Bookmarks</Typography>
            </div>

            <div className={classes.brandContainer}>
                <Toolbar className={classes.toolbar}>
                    {user?.result ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user?.result.name}
                                    src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                            <Button variant="contained" className={classes.logout} color="secondary"
                                    onClick={logout}>Logout</Button>
                        </div>
                    ) : (
                        <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                    )}
                </Toolbar>
            </div>
        </AppBar>
    );
};

export default Navbar;