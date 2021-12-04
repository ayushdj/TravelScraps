import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import service from "./service";

const PostItem = ({postData}) => {

    const [currentPost, setCurrentPost] = useState({
        userName: postData.userName,
        title: postData.title,
        location: postData.location,
        tags: postData.tags,
        text: postData.text,
        travelPlan: postData.travelPlan,
        images:postData.images,
        comments:postData.comments,
    })

    // user can like
    // user can comment
    // user can delete
    const [liked, setLiked] = useState(false);
    // have boolean state variable that renders like or unlike based on state

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-11">
                    {currentPost.userName}
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
                    <i className="far fa-thumbs-up"/> {!liked ? <span>Like</span> : <span>Unlike</span>}
                </div>
                <div className="col-6">
                    <i className="far fa-comment"/> Comments
                </div>
            </div>
        </li>
    )
}


export default PostItem;