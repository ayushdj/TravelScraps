import React, {useEffect, useState} from "react";
import './index.css';
import {useDispatch, useSelector} from "react-redux";
import profileService from "../../ProfileScreen/service";
import service from '../service';
import {useHistory} from "react-router-dom";

const selectProfile = (state) => state.profile;


const WhatsHappening = ({loggedIn, user}) => {
    const history = useHistory()
    /*
    const selectorProfile = useSelector(selectProfile);
    useEffect(() => profileService.findProfileById(dispatch, postData.person), []);
     */
    const dispatch = useDispatch();

    const [whatsHappening, setWhatsHappening] = useState("");
    const [location, setLocation] = useState("");
    const [title, setTitle] = useState("");

    const handleWhatsHappening = (event) => {
        setWhatsHappening(event.target.value);
    }

    const createNewPost = () => {

        /*
        {
    title: String,
    location: String,
    tags: Array,
    text: String,
    travelPlan: String,
    images: Array,
    comments: Array,
    person: String,
}
         */

        if (!loggedIn) {
            history.push('/login')
        } else {
            let newPost = {
                title: title,
                location: location,
                tags: [],
                text: whatsHappening,
                travelPlan: "",
                images: [],
                comments: [],
                person: user._id,
            }
            service.createPost(newPost);
            window.location.reload();
        }
    }

    return (
        <>

            <div className="row wd-border">
                <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1">
                    <img src={user.profilePicture}
                         className="rounded-circle float-start wd-avatar" alt={"image"}/>
                </div>
                <div className="col-11">

                    <div className="row">
                        <div className="col-6">
                            <input value={title} onChange={(event) =>
                                setTitle(event.target.value)} placeholder="Title"
                                   className="wd-text-post col-lg-12 row-10 form-control">
                            </input>
                        </div>
                        <div className="col-6">
                            <input value={location} onChange={(event) =>
                                setLocation(event.target.value)} placeholder="Location"
                                   className="wd-text-post col-lg-12 form-control">
                            </input>
                        </div>

                    </div>
                    <br/>

                    <div className="row">

                        <div className="col-12">
                        <textarea value={whatsHappening} onChange={(event) =>
                            setWhatsHappening(event.target.value)} placeholder="What's Happening?"
                                  className="wd-text col-lg-12 row-10 form-control">
                        </textarea>
                        </div>

                    </div>
                </div>

            </div>

            <div className="row mt-2">
                <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1">

                </div>
                <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-8 col-sm-8 col-xs-4">

                    <i className="far fa-image wd-imageIcon" style={{color: "rgb(29, 161, 242)"}}/>
                    <i className="fas fa-chart-line wd-imageIcon" style={{color: "rgb(29, 161, 242)"}}/>
                    <i className="far fa-smile wd-imageIcon" style={{color: "rgb(29, 161, 242)"}}/>
                    <i className="far fa-calendar" style={{color: "rgb(29, 161, 242)"}}/>


                </div>

                <button onClick={createNewPost} type="submit"
                        className="wd-tweet-button2 btn btn-primary float-end rounded-pill col-xxl-1 col-xl-1 col-lg-2 col-md-2 col-sm-2 col-xs-2">
                    Post
                </button>
            </div>
        </>
    )
}

export default WhatsHappening;