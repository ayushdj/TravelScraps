import React, {useState, useEffect} from 'react';
import service from "./service";
import PostItem from "./PostItem";
import WhatsHappening from "./WhatsHappening";
import {ADMIN} from "../../constants/userConst";


const ScrapPosts = ({user}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => service.findAllPosts().then(posts => setPosts(posts)), []);
    const loggedIn = JSON.stringify(user) !== "{}"

    return (
        <>
            {loggedIn && user.type !== ADMIN
                ? <div className="col-12">
                    <WhatsHappening loggedIn={loggedIn} user={user}/>
                </div> : <></>
            }
            <ul className="list-group">
                {
                    posts.map((post, key) =>
                        <PostItem loggedIn={loggedIn} postData={post} user={user} key={key}/>
                    )
                }
            </ul>

        </>
    )
}

export default ScrapPosts;