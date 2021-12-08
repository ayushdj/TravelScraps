import React, {useEffect, useState} from "react";
import './index.css';
import {useDispatch, useSelector} from "react-redux";
import profileService from "../../ProfileScreen/service";
import service from '../service';
import {useHistory} from "react-router-dom";
const selectProfile = (state) => state.profile;


const WhatsHappening = ({loggedIn}) => {
    const history = useHistory()
    /*
    const selectorProfile = useSelector(selectProfile);
    useEffect(() => profileService.findProfileById(dispatch, postData.person), []);
     */
    const dispatch = useDispatch();

    const [whatsHappening, setWhatsHappening] = useState("");


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
                title: "",
                location: "",
                tags: [],
                text: whatsHappening,
                travelPlan: "",
                images: [],
                comments: [],
                person: "",
            }
            service.createPost(newPost);
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-xxl-1 col-xl-1 col-lg-1">
                    <img
                         className="rounded-circle float-start wd-avatar" alt={"image"}/>
                </div>

                <div className="col-xxl-11 col-xl-11 col-lg-11 col-md-11 col-sm-11">
                    <textarea value={whatsHappening} onChange={(event) =>
                        setWhatsHappening(event.target.value)} placeholder="What's Happening?" className="wd-text col-lg-12 row-10 form-control">
                    </textarea>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1" >

                </div>
                <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9">

                    <i className="far fa-image wd-imageIcon" style={{color:"rgb(29, 161, 242)"}}/>
                    <i className="fas fa-chart-line wd-imageIcon" style={{color:"rgb(29, 161, 242)"}}/>
                    <i className="far fa-smile wd-imageIcon" style={{color:"rgb(29, 161, 242)"}}/>
                    <i className="far fa-calendar" style={{color:"rgb(29, 161, 242)"}}/>

                </div>

                <button onClick={createNewPost} type="submit" className="wd-tweet-button2 btn btn-primary float-end rounded-pill col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1">
                    Post
                </button>
            </div>
        </>
    )
}

export default WhatsHappening;