import React, {useState, useEffect} from 'react';
import service from "./service";
import profileService from "../ProfileScreen/service";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import './index.css';

const selectProfile = (state) => state.profile;

const ScrapPostsReDirect = () => {
    const id = useParams();
    const selectorProfile = useSelector(selectProfile);
    const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => service.findAllPosts().then(post => setPosts(post)), [posts]);


    const [profile, setProfile] = useState(selectorProfile);
    useEffect(() => {
        profileService.findProfileById(dispatch, id.pid).then((profile) => setProfile(profile.profile))
    }, [])

    let found = posts.filter(p => p.person === profile._id).length;

    return (
        <>
            <div>
                <div className="row">
                    <div className="col-1">
                        <Link to="/home">
                            <i className="fas fa-arrow-left fa-1x text-white"/>
                        </Link>

                    </div>
                    <div className="col-11">
                        <div className="wd-emphasis">{profile.firstName} {profile.lastName}</div>
                        {/*<div className="wd-normal">5196 Tweets</div>*/}
                    </div>

                </div>
                <div>
                    <div className="position-relative">
                        <img className="pos-absolute w-100" src={profile.bannerPicture} alt="banner"/>

                        <div className="pos-profile wd-zindex-bring-to-front">
                            <img className="rounded-circle wd-profile border wd-white-ex"
                                 src={profile.profilePicture} alt="profile"/>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="mt-5">
                        <div>
                            <div className="wd-emphasis">{profile.firstName} {profile.lastName}</div>
                            <div className="wd-normal">@{profile.userName}</div>
                            <p className="wd-paragraph pt-2">
                                {profile.bio}
                            </p>

                            <div className="wd-normal pb-2">
                                    <span className="me-4">
                                        <i className="fas fa-map-marker-alt pe-1"/>
                                        {profile.location}
                                    </span>

                                <span className="me-4">
                                        <i className="fas fa-birthday-cake pe-1"/>
                                    {profile.dateOfBirth}
                                    </span>

                            </div>
                        </div>
                    </div>
                    <br/>

                </div>
                <div>
                    <h1>Posts</h1>
                    {
                        found === 0 ? <h2>No Posts!</h2> :
                            posts.filter(p => p.person === profile._id).map(post =>
                                <div className="row wd-scrapPosts mb-3">
                                    <div className="col-1">
                                        <img src={profile.profilePicture}
                                             className="rounded-circle float-start wd-avatar"/>
                                    </div>
                                    <div className="col-9">
                                <span style={{
                                    color: "rgb(125, 125, 125)",
                                    marginLeft: "-20px"
                                }}>@{profile.userName}</span>
                                        <br/>
                                        <span style={{color: "rgb(125, 125, 125)", marginLeft: "-20px"}}><i
                                            className="fas fa-street-view"/> {profile.location}</span>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 mt-2">
                                            <h5 style={{color: "white"}}><strong>{post.title}</strong></h5>
                                            {post.text}
                                        </div>
                                    </div>
                                    <div className="row">
                                        {
                                            post.images.map(image =>
                                                <li className="list-group-item">
                                                    <img src={image}
                                                         className="mt-2 wd-border-radius-20px"
                                                         style={{width: "30%"}} alt={" "}/>
                                                </li>
                                            )
                                        }
                                    </div>
                                </div>
                            )}
                </div>
            </div>
        </>
    )
}

export default ScrapPostsReDirect;