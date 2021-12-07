const URL = 'http://localhost:4000/db/posts';

export const findAllPosts = () =>
    fetch(URL)
        .then(response => response.json());

export const deletePost = (id) =>
    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    });

export const createPost = (post) =>
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const updatePost = (dispatch, post) =>
    fetch(`${URL}/${post._id}`,{
        method: 'PUT',
        body: JSON.stringify(post),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json()).then(post => dispatch({
        type: 'update-post',
        post
    }));

export const findPostById = (post) =>
    fetch(`${URL}/${post._id}`, {
        method: 'GET',
        body: JSON.stringify(post),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export default {
    findAllPosts, createPost, updatePost, deletePost, findPostById
}