import React from 'react';
import './index.css'

const Comment = ({post, user}) => {

    return (
        <>

            <ul className={"list-group"}>
                {
                    post.comments.map((comment) =>
                        <li className="list-group-item" style={{backgroundColor: "black"}}>
                            <div className="row">
                                <div className="col-1">
                                    <img src={user.profilePicture} className="rounded-circle float-start wd-avatar" alt="profile picture"/>
                                </div>
                                <div className="col-11">
                                    <span className="wd-comment">
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