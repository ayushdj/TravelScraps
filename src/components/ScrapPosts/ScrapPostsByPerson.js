import React, {useState, useEffect} from 'react';
import service from "./service";
import {useHistory} from "react-router-dom";
import {ADMIN} from "../../constants/userConst";
import {useSelector} from "react-redux";
import './index.css';

const selectComments = (state) => state.comments;

const ScrapPostByPerson = () => {
    const selectorComments = useSelector(selectComments);
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
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

    //console.log("User id", user._id);
    const loggedIn = JSON.stringify(user) !== "{}"

    useEffect(getProfile, [history]);
    useEffect(() => service.findAllPosts().then(post => setPosts(post)), [posts]);


    const [liked, setLiked] = useState(false);


    const handleLikeClick = (liked) => {
        if (!loggedIn) {
            history.push('/login')
        } else {
            setLiked(!liked)
        }
    }

    const handleDeletePost = (event) => {
        service.deletePost(event._id);
        window.location.reload();
    }


    let found = posts.filter(p => p.person === user._id).length;

    return (
        <div>
            <h1>My Posts</h1>
            {
                found === 0 ? <h2>No Posts!</h2> :
                    posts.filter(p => p.person === user._id).map(post =>
                        <div className="row wd-scrapPosts mb-3" >
                            <div className="col-1" style={{marginTop:"10px", marginLeft:"10px"}}>
                                <img src={user.profilePicture}
                                     className="rounded-circle float-start wd-avatar"/>
                            </div>
                            <div className="col-9" style={{marginTop:"10px"}}>
                                <span style={{
                                    color: "rgb(125, 125, 125)",
                                }}>@{user.userName}</span>
                                <br/>
                                <span style={{color: "rgb(125, 125, 125)"}}><i
                                    className="fas fa-street-view"/> {user.location}</span>
                            </div>
                            <div className="col-1" style={{marginTop:"10px"}}>
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
    )
}
export default ScrapPostByPerson;