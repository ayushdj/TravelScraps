import React, {useState} from 'react';

const Comment = ({comments}) => {

    const [currentComments, setComments] = useState(comments);

    console.log(comments);
    return (
        <>
            <ul>
                {
                    comments.map((comment) =>
                        <li>
                            {comment}
                        </li>
                    )

                }
            </ul>
        </>
    )
}

export default Comment;