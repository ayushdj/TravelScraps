const URL = 'http://localhost:4000/db/posts';
const COMMENT_URL = 'http://localhost:4000/db/comments';

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

const updatePostComments = (dispatch, id, newPost) => {
    fetch(`${URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(newPost),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())}

export const findPostById = (post) =>
    fetch(`${URL}/${post._id}`, {
        method: 'GET',
        body: JSON.stringify(post),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const findCommentById = (dispatch, id) => {
    console.log("Inside the post service comment", id)

    fetch(`${COMMENT_URL}/${id}`)
        .then(response => {
            return response.json()
        })
        .then(comment => {
            dispatch({
                type: 'add-comment',
                comment
            })
        });
}

const createComment = (dispatch, comment) =>
    fetch(COMMENT_URL, {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(comment => {
            dispatch({
                type: 'add-comment',
                comment
            })
            return comment._id
        });



// export const deleteComments = (dispatch, eventId, newCalendar, calendarId) => {
//     fetch(`${EVENT_URL}/${eventId}`, {
//         method: 'DELETE'
//     }).then(response => {return response.json()})
//         .then(() => {
//             console.log("after delete", newCalendar);
//             updateCalendar(dispatch, calendarId, newCalendar)
//         })
//         .then(() => {
//             console.log("shit's deleted")
//             findCountCalendarByPersonId(dispatch, newCalendar.person)
//         }).then (() =>
//         window.location.reload()
//     )

export default {
    findAllPosts, createPost, updatePost, deletePost, findPostById, findCommentById, createComment, updatePostComments
}