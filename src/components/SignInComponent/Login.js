import {Link, useHistory} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Avatar, Button, Container, Grid, Paper, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import useStyles from "../Auth/styles";
import signUpService from "../Auth/signUpService";
import loginService from "../Auth/loginService";
import calendarService from "../CalendarComponent/service";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Style"

const initialState = {
    firstName: '',
    lastName: '',
    userName: '',
    dateOfBirth: '',
    email: '',
    password: '',
    confirmPassword: ''
};

// TODO add the handle changes back
const Login = () => {
    const [user, setUser] = useState({});
    const history = useHistory();
    const login = () => {
        fetch(`http://localhost:4000/api/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(() => {
            history.push('/home');
            window.location.reload();
        });
    }

    const register = () => {
        {
            console.log("API user for registered: ", `http://localhost:4000/api/register`);
            console.log("API user:", user);
            fetch(`http://localhost:4000/api/register`, {
                method: 'POST',
                body: JSON.stringify(user),
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
            }).then(() => history.push('/profile'));
        }
    };

    const getProfile = () => {
        fetch(`http://localhost:4000/api/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user);
            }).catch(() => history.push('/login'));
    }

    useEffect(getProfile, [history]);

    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const classes = useStyles();

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    const switchMode = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignup) {

            signUpService.createPerson(user)
                .then(() => loginService.findProfileByUsername(dispatch, user.userName, user.password))
                .then((addedProfile) =>
                    calendarService.createCalendar(dispatch, {events: [], person: addedProfile._id}))
                .then(() => history.push("/"));
        } else {
            loginService.findProfileByUsername(dispatch, user.userName, user.password)
                .then((addedProfile) =>
                    calendarService.findCountCalendarByPersonId(dispatch, addedProfile._id))
                .then(() => history.push("/"));
        }
    };


    const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">{isSignup ? 'Sign up'
                    : 'Sign in'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>

                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                <Input
                                    value={user.firstName}
                                    onChange={(e) => setUser({...user, firstName: e.target.value})}
                                    placeholder="firstname"
                                    className="form-control"/>
                                <Input
                                    value={user.lastName}
                                    onChange={(e) => setUser({...user, lastName: e.target.value})}
                                    placeholder="lastName"
                                    className="form-control"/>
                                <Input
                                    value={user.email}
                                    onChange={(e) => setUser({...user, email: e.target.value})}
                                    placeholder="email"
                                    type="text"
                                    className="form-control"/>

                                <Input
                                    value={user.dateOfBirth}
                                    onChange={(e) => setUser({...user, date: e.target.value})}
                                    placeholder="date of birth"
                                    type="date"
                                    className="form-control"/>

                            </>
                        )}
                        <Input
                            value={user.username}
                            onChange={(e) => setUser({...user, username: e.target.value})}
                            placeholder="username"
                            className="form-control"/>
                        <input
                            value={user.password}
                            onChange={(e) => setUser({...user, password: e.target.value})}
                            placeholder="password"
                            type="password"
                            className="form-control"/>
                        {isSignup && <Input placeholder="confirm password"
                                            type="password"
                                            className="form-control"/>}

                    </Grid>

                    <Grid>
                        {isSignup ? <Button type="signUp" fullWidth variant="contained" color="primary"
                                            className={classes.signUp}
                                            onClick={register}
                            >Sign Up
                            </Button>
                            :
                            <Button
                                type="signUp" fullWidth variant="contained" color="primary"
                                className={classes.signUp}
                                onClick={login}>
                                <Typography component={Link} to="/home" className={"text-white"}
                                            style={{textDecoration: 'none'}}
                                            align="center">Login</Typography>
                            </Button>}
                    </Grid>

                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an account? Sign in'
                                    : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
        // <div>
        //     <h1>Login</h1>
        //     <input
        //         value={user.username}
        //         onChange={(e) => setUser({...user, username: e.target.value})}
        //         placeholder="username"
        //         className="form-control"/>
        //     <input
        //         value={user.password}
        //         onChange={(e) => setUser({...user, password: e.target.value})}
        //         placeholder="password"
        //         type="password"
        //         className="form-control"/>
        //     <button
        //         className="btn btn-primary"
        //         onClick={login}>
        //         <Typography component={Link} to="/home" className={"primary text-white "}
        //                     style={{ textDecoration: 'none' }}
        //                     align="center">Login</Typography>
        //     </button>
        //
        // </div>
    );
};
export default Login;