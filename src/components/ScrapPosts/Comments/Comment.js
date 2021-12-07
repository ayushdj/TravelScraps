import React, {useState} from 'react';
import './index.css'
const Comment = ({post}) => {

    //const [currentComments, setComments] = useState(comments);

    //console.log(comments);
    return (
        <>

            <ul className={"list-group"}>
                {
                    post.comments.map((comment) =>
                        <li className={"list-group-item"} style={{backgroundColor:"white"}}>
                            <div className="row">
                                <div className="col-1">
                                    <img src="../../../images/cat.jpg" className="rounded-circle float-start wd-avatar"/>
                                </div>
                                <div className="col-11">
                                    <span style={{marginLeft:"-30px", fontSize:"15px", color:"black"}}>
                                         {comment}
                                    </span>

                                </div>
                            </div>

                        </li>
                    )

                }
            </ul>
        </>
    )
}

export default Comment;