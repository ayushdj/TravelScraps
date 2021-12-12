import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import service from "../ScrapPosts/service";
import {ADMIN} from "../../constants/userConst";
import profileService from "../ProfileScreen/service";

let allActualPosts = [];
const LikesByPerson = () => {

    const [user, setUser] = useState({});
    const [profile, setProfile] = useState({});
    const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();
    const getProfile = () => {
        fetch(`http://localhost:4000/api/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user);
            }).catch(() => history.push('/login'));
    }
    useEffect(getProfile, []);
    useEffect(() => profileService.findProfileById(dispatch, user._id).then((profile) => setProfile(profile.profile)), [user]);

    console.log("this is the PROFILE", profile);
    console.log("Current user", user);
    const loggedIn = JSON.stringify(user) !== "{}"


    //useEffect(() => service.findAllPosts().then(post => setPosts(post)), [posts]);


    //console.log("This is the USER", user);

    let allLikesByUser = profile.likes;
    console.log("IDs OF ALL POSTS LIKED BY CURRENT USER",allLikesByUser);
    if (allLikesByUser) {
        console.log("There's shit in this array", allLikesByUser.length);


    }
    /*
    const populateLikes = async () => {
        for (let i = 0; i < allLikesByUser.length; i++) {
            let id = allLikesByUser[i];
            await service.findPostById(dispatch, id).then(post => allActualPosts.push(post)).then(() => setPosts(allActualPosts));
        }
    }*/


    // let totalLikes = 0;
    // if (profile) {
    //     totalLikes = profile.likes.length;
    // }
    //
    // console.log("ACTUAL POSTS LIKED BY CURRENT USER",posts);
    // console.log("length of actual posts", posts);
    // //setPosts([...posts, post])
    // // then(post => console.log("Current Post being extracted ",post)).catch(error => console.error(error));
    const handleDeletePost = (event) => {
        service.deletePost(event._id);
        window.location.reload();
    }

    return (
        <>
            <div>
                {/*{allPosts.length === 0 ? <h1>hi hello</h1> }*/}
            </div>
            <div>
                {
                    posts.length === 0 ? <h1>NOTHING TO DISPLAY</h1> :
                        posts.map(post =>
                            <div className="row wd-scrapPosts mb-3">
                                <div className="col-1">
                                    <img src={user.profilePicture}
                                         className="rounded-circle float-start wd-avatar"/>
                                </div>
                                <div className="col-9">
                                <span style={{
                                    color: "rgb(125, 125, 125)",
                                    marginLeft: "-20px"
                                }}>@{user.userName}</span>
                                    <br/>
                                    <span style={{color: "rgb(125, 125, 125)", marginLeft: "-20px"}}><i
                                        className="fas fa-street-view"/> {user.location}</span>
                                </div>
                                <div className="col-1">
                                    {
                                        user._id === post.person || user.type === ADMIN ?
                                            <i className="fas fa-trash" onClick={post => handleDeletePost(post)}/> : <></>
                                    }
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
        </>
    )
}

export default LikesByPerson;