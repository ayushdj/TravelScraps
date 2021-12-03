import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Avatar, Button, Paper, Grid, Typography, Container, Link} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './styles';
import Input from './Input';
import {signin, signup} from "../../actions/auth";
import signUpService from "./signUpService";
import loginService from "./loginService";


const initialState = {
    firstName: '',
    lastName: '',
    userName: '',
    dateOfBirth: '',
    email: '',
    password: '',
    confirmPassword: ''
};


const SignUp = () => {
    const userNameChangeHandler = (event) => {
        const userName = event.target.value;
        const newProfile = {
            ...profile,
            userName : userName
        };
        setProfile(newProfile);
    }

    const passwordChangeHandler = (event) => {
        const password = event.target.value;
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



    const [profile, setProfile] = useState(initialState);
    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
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
            const newProfile = {firstName:profile.firstName,
                lastName:profile.lastName,
                userName:profile.userName,
                dateOfBirth:profile.date,
                email:profile.email,
                password:profile.password}
            signUpService.createPerson(newProfile)
                .then(history.push("/"));
        } else {
            loginService.findProfileByUsername(dispatch, profile.userName, profile.password)
                .then(history.push("/"));
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
                        <Input name="username" label="Username" handleChange={userNameChangeHandler}
                               type="username"/>

                        <Input name="password" label="Password" handleChange={passwordChangeHandler}
                               type={showPassword ? 'text' : 'password'}
                               handleShowPassword={handleShowPassword}/>
                        {isSignup && <Input name="confirmPassword" label="Confirm Password"
                                            handleChange={handleChange} type="password"/>}
                    </Grid>

                    <Grid>
                        {isSignup ? <Button type="signUp" fullWidth variant="contained" color="primary"
                                            className={classes.signUp}>Sign Up</Button>
                            :
                         <Button type="signIn" fullWidth variant="contained" color="primary"
                                      className={classes.signIn}>Sign In</Button>}
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
    );
};

export default SignUp;