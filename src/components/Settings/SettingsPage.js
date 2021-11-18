import React, {useState} from 'react';
import Username from "./components/Username/Username";
import {useDispatch} from "react-redux";
import {validateEmail, validateUsername} from "../../utils/validations";
import Email from './components/Email/Email'
import {Button} from "@material-ui/core";
import {Col, Row} from 'react-bootstrap';
import Password from "./components/Password/Password";

const SettingsPage = ({profileData}) => {
    let dispatch = useDispatch();

    // creating a state variable to save the changes made by the user
    const [savedChanges, setSavedChanges] = useState(false);

    // defining a state variable that allows users to dismiss the alert
    // about submitting the form
    const [dismiss, setDismiss] = useState(true);

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
        const action = {
            type: "save-new-settings",
            handle: values.userName,
            password:values.password,
            emailAddress:values.emailAddress,
            profilePicture:profileData.profilePicture,
            bannerPicture: profileData.bannerPicture,
            bio: profileData.bio,
            location:profileData.location,
            dateOfBirth: profileData.dateOfBirth,
            dateJoined: profileData.dateJoined,
            followingCount: profileData.followingCount,
            followersCount: profileData.followersCount,
            firstName: profileData.firstName,
            lastName: profileData.lastName,
            website: profileData.website
        }
        dispatch(action);

    }

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