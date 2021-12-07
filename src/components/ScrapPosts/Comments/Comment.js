import React, {useState} from 'react';
import './index.css'
const Comment = ({comments}) => {

    const [currentComments, setComments] = useState(comments);

    //console.log(comments);
    return (
        <>

            <ul className={"list-group"}>
                {
                    comments.map((comment) =>
                        <li className={"list-group-item"}>
                            <div className="row">
                                <div className="col-1">
                                    <img src="../../../images/cat.jpg" className="rounded-circle float-start wd-avatar"/>
                                </div>
                                <div className="col-11">
                                    <span style={{marginLeft:"-30px"}}>
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