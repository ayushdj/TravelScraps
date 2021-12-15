import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import service from '../service';
import {Link, useHistory} from "react-router-dom";
import {Form} from "react-bootstrap";
import FirstName from "./components/Name/FirstName";
import LastName from "./components/Name/LastName";
import Location from "./components/Location/Location";
import Website from "./components/Website/Website";
import Bio from "./components/Bio/Bio";
import Birthday from "./components/Birthday/Birthday";

const EditProfile = () => {

    const [user, setUser] = useState({});
    const history = useHistory();
    const getProfile = () => {
        fetch(`http://localhost:4000/api/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user);
                setValues(user);
            }).catch(() => history.push('/login'));
    }
    useEffect(getProfile, [history]);

    let dispatch = useDispatch();

    let [values, setValues] = useState({});


    // violations
    const [violations, setViolations] = useState({
        emailViolation: false,
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
    const handleBioChange = (event) => {
        // set the bio state variable to be what the user typed
        setValues({...values, bio:event.target.value});
        // find out of the bio is valid
        //let isValidBio = validateBio(values.bio);
        // set the violations for the bio field
        //setViolations({...violations, bioViolation:isValidBio});
        // setting the character count
        setCharacterCounts({...characterCounts, bioCharacterCount:event.target.value.length});
    }
    // event handler function for location component
    const handleLocation = (event) => {
        // setting the users location
        setValues({...values, location:event.target.value});
    }
    // event handler for the website
    const handleWebsite = (event) => {
        setValues({...values, website: event.target.value});
    }
    // event handler function for date component
    const handleBirthday = (event) => {
        // setting the value of the birthday field
        setValues({...values, dateOfBirth:event.target.value});
    }

    const handleSaveChanges = () => {
        //if (values.firstName.length !== 0 && values.lastName.length !== 0 && violations.bioViolation === false) {
        const json = {
            _id: user._id,
            firstName:values.firstName,
            lastName:values.lastName,
            bio:values.bio,
            location:values.location,
            website:values.website,
            dateOfBirth:values.dateOfBirth,
            userName:user.userName,
            email:user.email,
            password:user.password,
            profilePicture:user.profilePicture,
            bannerPicture:user.bannerPicture
        }
        service.updateProfile(json, dispatch);
        service.updateUser(json, dispatch);
        logout();
        login();
    }
    const login = () => {
        fetch(`http://localhost:4000/api/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(() => {
            history.push('/profile');
            window.location.reload();
        });
    }
    const logout = () => {
        fetch(`http://localhost:4000/api/logout`, {
            method: 'POST',
            credentials: 'include'
        }).then(() => {
            history.push('/profile');
        });


    }

    return (
        <div className="row mt-2">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <>
                    <Form onSubmit={handleSaveChanges}>
                        <div className="row">
                            <div className="col-1">
                                <Link to="/profile">
                                    <i className="fas fa-times fa-pull-right" style={{color:"white",marginTop:"10px"}}/>
                                </Link>
                            </div>
                            <div className="col-9">
                                <strong className="wd-edit-profile-header" style={{fontSize:"25px"}}>Edit Profile</strong>
                            </div>
                            <div className="col-2">
                                <Link to="/profile">
                                    <button type="submit" onClick={handleSaveChanges}
                                            className="wd-save-profile btn btn-primary float-end rounded-pill col-xxl-12
                                    col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <strong>Save</strong>
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div style={{marginLeft:"20px", marginTop:"10px"}}>
                            <div className="position-relative">
                                <img src={user.bannerPicture} className="pos-absolute w-100" alt={"banner"}/>
                                <div className="pos-profile wd-zindex-bring-to-front">
                                    <img src={user.profilePicture} className="rounded-circle wd-profile
                            border wd-white-ex" alt={"profilePic"}/>
                                </div>
                            </div>
                        </div>

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                {/* First name component */}
                                <FirstName handleFirstName={handleFirstName} firstName={values.firstName}/>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                {/* Last name component */}
                                <LastName handleLastName={handleLastName} lastName={values.lastName}/>
                            </div>
                        </div>

                        <div className="row">
                            {/* Location component */}
                            <Location handleLocationChange={handleLocation} location={values.location}/>
                        </div>
                        {/* Website component */}
                        <Website handleWebsite={handleWebsite} website={values.website}/>
                        {/* Bio component */}
                        <Bio handleBioChange={handleBioChange} bio={values.bio} bioViolation={violations.bioViolation}
                             bioCharacterCount={characterCounts.bioCharacterCount} />
                        {/* Birthday component */}
                        <Birthday handleBirthday={handleBirthday} birthday={values.dateOfBirth} />
                    </Form>
                </>
            </div>
        </div>
    )
}

export default EditProfile;