import React, {useState} from 'react';
import './index.css'

const Comment = ({post, user}) => {


    /*
    const comment = {
        person:user._id,
        text:post.title,
        post:post._id,
    }

     */

    return (
        <>

            <ul className={"list-group"}>
                {
                    post.comments.map((comment) =>
                        <li className={"list-group-item"} style={{backgroundColor: "black"}}>
                            <div className="row">
                                <div className="col-1">
                                    <img src={user.profilePicture} className="rounded-circle float-start wd-avatar"/>
                                </div>
                                <div className="col-11">
                                    <span style={{fontSize: "15px", color: "white"}} className="wd-comment">
                                         {comment}
                                    </span>

                                </div>
                            </div>

                        </li>)}
            </ul>
        </>
    )
}

export default Comment;