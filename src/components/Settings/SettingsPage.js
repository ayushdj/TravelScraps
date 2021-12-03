import React, {useEffect, useState} from 'react';
import Username from "./components/Username/Username";
import {useDispatch, useSelector} from "react-redux";
import {validateEmail, validateUsername} from "../../utils/validations";
import Email from './components/Email/Email'
import {Button} from "@material-ui/core";
import {Col, Row} from 'react-bootstrap';
import Password from "./components/Password/Password";
import service from "../ProfileScreen/service";
const selectProfile = (state) => state.profile;

const SettingsPage = ({profileData}) => {

    let dispatch = useDispatch();

    // Creating state variables
    let [values, setValues] = useState({
        emailAddress:profileData.emailAddress,
        userName:profileData.handle,
        password: profileData.password
    })

    const [violations, setViolations] = useState({
        emailViolation: false,
        bioViolation: false,
        userNameViolation: false
    })

    const [characterCounts, setCharacterCounts] = useState({
        bioCharacterCount: 0,
        usernameCharacterCount: 0
    })

    const handleUserNameChange = (event) => {
        // set the username to be the value typed by the user
        setValues({...values, userName:event.target.value})
        // find out if the username the user entered is valid or not
        let isValidUserName = validateUsername(values.userName);
        // set the violation for the username field
        setViolations({...violations, userNameViolation:isValidUserName});
        // setting the character count
        setCharacterCounts({...characterCounts, usernameCharacterCount:event.target.value.length});
    }
    // event handler function for email
    const handleEmailChange = (event) => {
        // set the email to be the value typed by the user
        setValues({...values, emailAddress:event.target.value});
        // find out if the email is valid or not
        let isValidEmail = validateEmail(values.emailAddress);
        // set the violation for the email field
        setViolations({...violations, emailViolation:isValidEmail});
    }
    const handlePassword = (event) => {
        setValues({...values, password: event.target.value});
    }

    const handleSaveChanges = (event) => {
        const json = {
            _id: profileData._id,
            firstName: profileData.firstName,
            lastName: profileData.lastName,
            bio: profileData.bio,
            location:profileData.location,
            website: profileData.website,
            dateOfBirth: profileData.dateOfBirth,
            dateJoined: profileData.dateJoined,
            handle:values.userName,
            emailAddress:values.emailAddress,
            password:values.password,
            followingCount: profileData.followingCount,
            followersCount: profileData.followersCount,
            profilePicture:profileData.profilePicture,
            bannerPicture: profileData.bannerPicture,
        }
        service.updateProfile(json, dispatch);
    }

    /*
    const handleDeleteAccount = (event) => {
        service.deleteProfile(profile);
    }*/

    return (
        <>
            <div className="row">
                <div className="col-6">
                    <Username handleUserNameChange={handleUserNameChange} userName={values.userName}
                              userNameViolation={violations.userNameViolation}
                              usernameCharacterCount={characterCounts.usernameCharacterCount}/>
                </div>
                <div className="col-6">
                    <Password handlePasswordChange={handlePassword} password={values.password}/>
                </div>
            </div>


            <Email handleEmailChange={handleEmailChange} emailAddress={values.emailAddress}
                   emailViolation={violations.emailViolation} />
            <Row style={{marginTop:"20px"}}>
                <Col xxl="auto" lg="auto" md="auto" sm="auto" xs="auto"><Button onClick={handleSaveChanges}
                    style={{color:"white", backgroundColor:"green"}} variant="success" type="btn btn-success">Save Changes</Button></Col>
                <Col xxl="auto" lg="auto" md="auto" sm="auto" xs="auto"><Button variant="reset" className="btn btn-danger"
                    style={{color:"white", backgroundColor:"red"}}>Delete Account</Button></Col>
            </Row>
        </>
    )
}

export default SettingsPage;