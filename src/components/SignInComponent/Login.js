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
import {createCountDown} from "../CountDownComponent/service";

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

    const userNameChangeHandler = (event) => {
        const userName = event.target.value;
        const newUser = {
            ...user,
            userName : userName
        };
        setUser(newUser);

        const newProfile = {
            ...profile,
            userName : userName
        };
        setProfile(newProfile);
    }

    const passwordChangeHandler = (event) => {
        const password = event.target.value;
        const newUser = {
            ...user,
            password : password
        };
        setUser(newUser);

        const newProfile = {
            ...profile,
            password : password
        };
        setProfile(newProfile);
    }

    const firstNameChangeHandler = (event) => {
        const firstName = event.target.value;
        const newProfile = {
            ...profile,
            firstName : firstName
        };
        setProfile(newProfile);
    }

    const lastNameChangeHandler = (event) => {
        const lastName = event.target.value;
        const newProfile = {
            ...profile,
            lastName : lastName
        };
        setProfile(newProfile);
    }

    const emailChangeHandler = (event) => {
        const email = event.target.value;
        const newProfile = {
            ...profile,
            email : email
        };
        setProfile(newProfile);
    }

    const dobChangeHandler = (event) => {
        const dateOfBirth = event.target.value;
        const newProfile = {
            ...profile,
            dateOfBirth : dateOfBirth
        };
        setProfile(newProfile);
    }

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
            }).then(() => {
                login()
                history.push('/home')
                //window.location.reload();
            });
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

    const [profile, setProfile] = useState(initialState);

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
        e.preventDefault(true);

        if (isSignup) {
            const newProfile = {firstName:profile.firstName,
                lastName:profile.lastName,
                userName:profile.userName,
                dateOfBirth:profile.date,
                email:profile.email,
                password:profile.password,
                bio: "",
                website: "",
                location: "",
                dateJoined: Date.now(),
                followingCount: 0,
                followersCount: 0
            }

            signUpService.createPerson(newProfile)
                .then(() => loginService.findProfileByUsername(dispatch, user.userName, user.password))
                .then((addedProfile) => {
                        calendarService.createCalendar(dispatch, {events: [], person: addedProfile._id})
                        createCountDown(dispatch, addedProfile._id)
                }).then(() => history.push("/"));
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
                                <Input name="firstName" label="First Name"
                                       handleChange={firstNameChangeHandler} autoFocus half/>
                                <Input name="lastName" label="Last Name" handleChange={lastNameChangeHandler}
                                       half/>
                                <Input name="email" label="Email Address" handleChange={emailChangeHandler}
                                       type="email"/>
                                <Input name="dateOfBirth" type="date"
                                       handleChange={dobChangeHandler}/>

                            </>
                        )}
                        <Input
                            name="username" label="Username" handleChange={userNameChangeHandler}
                            type="username"
                            value={user.username}
                            onChange={(e) => setUser({...user, username: e.target.value})}/>
                        <Input
                            name="password" label="Password" handleChange={passwordChangeHandler}
                            type={showPassword ? 'text' : 'password'}
                            handleShowPassword={handleShowPassword}
                            value={user.password}
                            onChange={(e) => setUser({...user, password: e.target.value})}/>
                        {isSignup && <Input name="confirmPassword" label="Confirm Password"
                                            handleChange={passwordChangeHandler} type="password"/>}

                    </Grid>

                    <Grid>
                        {isSignup ?<Button
                                      type="signUp" fullWidth variant="contained" color="primary"
                                      className={classes.signUp}
                                      onClick={register}>
                                      <Typography component={Link} to="/home" className={"text-white"}
                                                  style={{textDecoration: 'none'}}
                                                  align="center">Sign Up</Typography>
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