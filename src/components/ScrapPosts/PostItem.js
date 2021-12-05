import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import service from "./service";
import profileService from '../ProfileScreen/service'
import Comment from "./Comment";
const selectProfile = (state) => state.profile;

const PostItem = ({postData}) => {

    console.log(postData);
    const selectorProfile = useSelector(selectProfile);
    //const [profile, setProfile] = useState({});
    const dispatch = useDispatch();
    useEffect(() => profileService.findProfileById(dispatch, postData.person), []);




    const [currentPost, setCurrentPost] = useState({
        userName: selectorProfile.handle,
        title: postData.title,
        location: postData.location,
        tags: postData.tags,
        text: postData.text,
        travelPlan: postData.travelPlan,
        images:postData.images,
        comments:postData.comments,
    })

    console.log(currentPost.comments);


    // user can like
    // user can comment
    // user can delete

    // have boolean state variable that renders like or unlike based on state
    const [liked, setLiked] = useState(false);


    const [clickedComment, setClickedComment] = useState(false);

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-11">
                    {/*{currentPost.userName}*/}
                    {selectorProfile.handle}
                </div>
                <div className="col-1">
                    <i className="fas fa-trash"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {currentPost.text}
                </div>
            </div>
            <div className="row">
                {
                    currentPost.images.map(image =>
                        <li className="list-group-item">
                            <img src={image}
                                 className="mt-2 wd-border-radius-20px"
                                 style={{width: "100%"}} alt={" "}/>
                        </li>
                    )
                }
            </div>
            <div className="row">
                <div className="col-6">
                    <i onClick={() => setLiked(!liked)} className="far fa-thumbs-up"/> {!liked ? <span className="ts-liked">Like</span> :
                    <span>Unlike</span>}
                </div>
                <div className="col-6">
                    <i onClick={() => setClickedComment(!clickedComment)} className="far fa-comment"/>
                    {!clickedComment ?
                    <><span> Hide all comments</span> <Comment comments={currentPost.comments}/> </> : <span> Show all comments</span>
                    }
                </div>
            </div>
        </li>
    )
}


export default PostItem;