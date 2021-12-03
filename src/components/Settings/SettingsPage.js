import React, {useEffect, useState} from 'react';
import Username from "./components/Username/Username";
import {useDispatch, useSelector} from "react-redux";
import {validateEmail, validateUsername} from "../../utils/validations";
import Email from './components/Email/Email'
import {Button} from "@material-ui/core";
import {Col, Form, InputGroup, Row} from 'react-bootstrap';
import Password from "./components/Password/Password";
import service from "../ProfileScreen/service";
const selectProfile = (state) => state.profile;

const SettingsPage = ({profileData}) => {

    let dispatch = useDispatch();

    // Creating state variables
    let [values, setValues] = useState({
        emailAddress:profileData.emailAddress,
        handle:profileData.handle,
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
        setValues({...values, handle:event.target.value})
        // find out if the username the user entered is valid or not
        let isValidUserName = validateUsername(values.handle);
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
            handle:values.handle,
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
                    <div>
                        <Form.Group className="mb-3" style={{marginTop:"15px"}}>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}> <Form.Label>Username
                                    <span style={{color:"red", fontSize:"18px"}}>*</span></Form.Label> </Col>
                            </Row>
                            <InputGroup>
                                <InputGroup.Text id="inputGroupPrepend">travelscraps.com/</InputGroup.Text>
                                <Form.Control type="text" className="wd-inputs" placeholder="Username"
                                              aria-describedby="inputGroupPrepend" onChange={handleUserNameChange} value={values.handle}
                                              name="username"/>
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                    {violations.userNameViolation ? <Form.Text style={{color:"red"}}>
                                            {`${characterCounts.usernameCharacterCount - 30} character over the limit`}</Form.Text> :
                                        <Form.Text>{`${30 - characterCounts.usernameCharacterCount}/30 characters remaining`}</Form.Text>}
                                </Col>
                            </Row>
                        </Form.Group>
                    </div>
                </div>
                <div className="col-6">
                    <div className="password">
                        <Form.Group className="mt-3">
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}> <Form.Label>
                                    Password</Form.Label></Col>
                            </Row>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                    <Form.Control className="wd-inputs" required={true}
                                                  name="email" onChange={handlePassword} value={values.password}/>
                                </Col>
                            </Row>
                        </Form.Group>
                    </div>
                </div>
            </div>

            <div className="email">
                <Form.Group className="mb-3">
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}> <Form.Label>
                            Email Address<span style={{color:"red", fontSize:"18px"}}>*</span></Form.Label></Col>
                    </Row>

                    <Row>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                            <Form.Control type="email" placeholder="name@example.com" className="wd-inputs" required={true}
                                          name="email" onChange={handleEmailChange} value={values.emailAddress}/>
                            <Form.Text style={{color:"rgb(125, 125, 125)"}}>
                                We'll never share your email with anyone else.</Form.Text>
                        </Col>
                    </Row>

                    {violations.emailViolation ?
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <span style={{color:"red", fontSize:"15px", marginLeft:"10px"}}>
                        *Invalid Email Address</span></Col>
                        </Row> : null
                    }
                </Form.Group>
            </div>



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