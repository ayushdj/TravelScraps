import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import service from "./service";
import profileService from '../ProfileScreen/service'
import Comment from "./Comments/Comment";
import {useHistory} from "react-router-dom";
const selectProfile = (state) => state.profile;

const PostItem = ({loggedIn, postData}) => {
    const history = useHistory()

    // const selectorProfile = useSelector(selectProfile);
    //const [profile, setProfile] = useState({});
    const dispatch = useDispatch();
    useEffect(() => profileService.findProfileById(dispatch, postData.person), []);

    const [currentPost, setCurrentPost] = useState({
        userName: postData.handle,
        title: postData.title,
        location: postData.location,
        tags: postData.tags,
        text: postData.text,
        travelPlan: postData.travelPlan,
        images:postData.images,
        comments:postData.comments,
        person:postData.person
    })

    const [newComment, setNewComment] = useState("");


    const handleCommentAddition = (event) => {
        if (!loggedIn) {
            history.push('/login')
        } else {
            currentPost.comments.push(newComment);
            const newPost = {
                _id: postData._id,
                userName: currentPost.userName,
                title: currentPost.title,
                location: currentPost.location,
                tags: currentPost.tags,
                text: currentPost.text,
                travelPlan: currentPost.travelPlan,
                images: currentPost.images,
                comments: currentPost.comments,
                person: currentPost.person,
            }
            service.updatePost(dispatch, newPost);
        }
    }

    //console.log(currentPost.comments);


    // user can like
    // user can comment
    // user can delete

    // have boolean state variable that renders like or unlike based on state
    const [liked, setLiked] = useState(false);

    const handleLikeClick = (liked) => {
        if (!loggedIn) {
            history.push('/login')
        } else {
            setLiked(!liked)
        }
    }

    const [clickedComment, setClickedComment] = useState(false);

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img src="../../../images/cat.jpg" className="rounded-circle float-start wd-avatar"/>
                </div>
                <div className="col-10">
                    {/*{currentPost.userName}*/}
                    <span style={{color:"rgb(125, 125, 125)", marginLeft:"-20px"}}>@{postData.handle}</span>
                </div>
                <div className="col-1">
                    <i className="fas fa-trash"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mt-2">
                    {currentPost.text}
                </div>
            </div>
            <div className="row">
                {
                    currentPost.images.map(image =>
                        <li className="list-group-item">
                            <img src={image}
                                 className="mt-2 wd-border-radius-20px"
                                 style={{width: "30%"}} alt={" "}/>
                        </li>
                    )
                }
            </div>
            <div className="row">
                <div className="col-6">
                    {!liked ? <i onClick={() => handleLikeClick(liked)} className="far fa-thumbs-up"/> :
                        <i onClick={() => setLiked(!liked)} style={{color:"rgb(29, 161, 242)"}} className="far fa-thumbs-up"/>
                    }

                    {!liked ? <span className="ts-liked"> Like</span> :
                    <span> Unlike</span>}
                </div>
                <div className="col-6">
                    <span>
                    <i onClick={() => setClickedComment(!clickedComment)} className="far fa-comment"/>
                        {!clickedComment ? <span> Hide all comments</span> : <span> Show all comments</span> }
                    </span> </div>

                    {!clickedComment ?
                        <> <Comment post={currentPost}/> </> : <></>
                    }
                    <div className="row mt-2">
                        <div className="col-12">
                            <textarea onChange={(event) =>
                                setNewComment(event.target.value)} placeholder="Add a comment"
                                      className="wd-text col-lg-12 row-10 form-control">
                            </textarea>
                        </div>
                        <button onClick={handleCommentAddition} type="button" className="btn btn-primary mt-2">Add Comment</button>

                    </div>

            </div>
        </li>
    )
}


export default PostItem;