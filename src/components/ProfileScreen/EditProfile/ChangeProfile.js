import React, {useState} from 'react';
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux";
import '../index.css'
import {Col, Form} from "react-bootstrap";
import {validateEmail, validateUsername, validateBio} from "../../../utils/validations";

const ChangeProfile = ({profileData}) => {

    let dispatch = useDispatch();

    // Creating state variables
    let [values, setValues] = useState({
        firstName:profileData.firstName,
        lastName:profileData.lastName,
        bio:profileData.bio,
        location:profileData.location,
        website:profileData.website,
        birthday:profileData.dateOfBirth,
        emailAddress:profileData.emailAddress,
        userName:profileData.handle
    })

    // violations
    const [violations, setViolations] = useState({
        emailViolation: true,
        bioViolation: false,
        userNameViolation: false
    })

    // state variable to represent character counts
    const [characterCounts, setCharacterCounts] = useState({
        bioCharacterCount: 0,
        usernameCharacterCount: 0
    })

    // event handler function for first name
    const handleFirstName = (event) => {
        // set the first name
        setValues({...values, firstName:event.target.value});
    }
    // event handler function for last name
    const handleLastName = (event) => {
        // set the last name
        setValues({...values, lastName:event.target.value});
    }
    // event handler function for bio component
    const handleBio = (event) => {
        // set the bio state variable to be what the user typed
        setValues({...values, bio:event.target.value});
        // find out of the bio is valid
        let isValidBio = validateBio(values.bio);
        // set the violations for the bio field
        setViolations({...violations, bioViolation:isValidBio});
        // setting the character count
        setCharacterCounts({...characterCounts, bioCharacterCount:event.target.value.length});
    }
    // event handler function for email
    const handleEmailChange = (event) => {
        // set the email to be the value typed by the user
        setValues({...values, email:event.target.value});
        // find out if the email is valid or not
        let isValidEmail = validateEmail(values.email);
        // set the violation for the email field
        setViolations({...violations, emailViolation:isValidEmail});
    }
    // event handler function for username
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
    // event handler function for location component
    const handleLocation = (event) => {
        // setting the users location
        setValues({...values, location:event.target.value});
    }
    const handleWebsite = (event) => {
        setValues({...values, website: event.target.value});
    }
    // event handler function for date component
    const handleBirthday = (event) => {
        // setting the value of the birthday field
        setValues({...values, birthday:event.target.value});
    }

    const clickSaveChanges = (event) => {
        dispatch({
            type:'save-changes',
            firstName:values.firstName,
            lastName:values.lastName,
            bio:values.bio,
            location:values.location,
            website:values.website,
            birthday:values.birthday
        })
    }

    return (
        <>
            <div className="row">
                <div className="col-1">
                    <Link to="/profile">
                        <i className="fas fa-times fa-pull-right" style={{color:"white",marginTop:"5px"}}/>
                    </Link>
                </div>

                <div className="col-9">
                    <strong className="wd-edit-profile-header">Edit Profile</strong>
                </div>

                <div className="col-2">
                    <Link to="/profile">
                        <button type="submit" onClick={clickSaveChanges}
                                className="wd-save-profile btn btn-primary float-end rounded-pill col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <strong>Save</strong>
                        </button>
                    </Link>
                </div>
            </div>

            <div className="row" style={{marginLeft:"20px", marginTop:"10px"}}>
                <div className="col-12">
                    <img src={profileData.bannerPicture} className="wd-banner-edit" alt={"banner"}/>
                </div>
            </div>

            <div className="row">
                <div className="col-10">
                    <img src={profileData.profilePicture} className="img-fluid wd-ProfilePic-edit" alt={"profilePic"}/>
                </div>
                <div className="col-2">
                </div>
            </div>


            <div className="row" style={{marginLeft:"30px", marginTop:"20px"}}>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <p className="col-12" style={{ marginTop:"5px"}}>First name</p>
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <input value={values.firstName} onChange={handleFirstName} type="textarea"
                           placeholder="John" className="wd-text-edit form-control" style={{marginLeft:"-20px"}}/>
                </div>
            </div>

            <div className="row" style={{marginLeft:"30px", marginTop:"20px"}}>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <p className="col-12" style={{ marginTop:"5px"}}>Last name</p>
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <input value={values.lastName} onChange={handleLastName} type="textarea"
                           placeholder="Doe" className="wd-text-edit form-control" style={{marginLeft:"-20px"}}>
                    </input>
                </div>
            </div>

            <div className="row" style={{marginLeft:"30px", marginTop:"20px"}}>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <p className="col-12" style={{ marginTop:"5px"}}>Bio</p>
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <textarea value={values.bio} onChange={handleBio}
                              placeholder="Enter bio" className="wd-text-edit-bio form-control" style={{marginLeft:"-20px"}}>
                    </textarea>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        {violations.bioViolation ? <Form.Text style={{color:"red", marginLeft:"-20px"}}>{`${characterCounts.bioCharacterCount - 256} characters over the limit`}</Form.Text> :
                            <Form.Text style={{marginLeft:"-30px"}}>{`${256 - characterCounts.bioCharacterCount}/256 characters remaining`}</Form.Text>}
                    </Col>
                </div>
            </div>

            <div className="row" style={{marginLeft:"30px", marginTop:"20px"}}>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <p className="col-12" style={{marginTop:"5px"}}>Location</p>
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <input value={values.location} onChange={handleLocation} type="textarea"
                           placeholder="e.g. San Francisco, CA" className="wd-text-edit form-control" style={{marginLeft:"-20px"}}>
                    </input>
                </div>
            </div>

            <div className="row" style={{marginLeft:"30px", marginTop:"20px"}}>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <p className="col-12" style={{ marginTop:"5px"}}>Website</p>
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <input value={values.website} onChange={handleWebsite} type="textarea"
                           placeholder="e.g. www.apple.com" className="wd-text-edit form-control" style={{marginLeft:"-20px"}}>
                    </input>
                </div>
            </div>

            <div className="row" style={{marginLeft:"30px", marginTop:"20px"}}>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <p className="col-12" style={{marginTop:"5px"}}>Birthday</p>
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <input value={values.birthday} onChange={handleBirthday} type="textarea"
                           placeholder="e.g. April 1, 1993" className="wd-text-edit form-control" style={{marginLeft:"-20px"}}>
                    </input>
                </div>
            </div>
        </>
    )
}
/*

 */
export default ChangeProfile;