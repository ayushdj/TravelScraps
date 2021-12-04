import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import service from "./service";
import PostItem from "./PostItem";

const selectAllPosts = (state) => state.scrapPost;

const ScrapPosts = () => {

    const selectorPosts = useSelector(selectAllPosts);
    const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => service.findAllPosts().then(posts => setPosts(posts)), []);
    console.log(posts);


    return (
        <>
            <ul className="list-group">
                {
                    posts.map(post =>
                        <PostItem postData={post} />
                    )
                }
            </ul>

        </>
    )
}

export default ScrapPosts;