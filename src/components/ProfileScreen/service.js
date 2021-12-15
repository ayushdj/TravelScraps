const URL = 'http://localhost:4000/db/person';
const USER_URL = 'http://localhost:4000/api/users';

const findProfileById = (dispatch, id) =>
    fetch(`${URL}/${id}`)
        .then(response => response.json())
        .then(profile =>
            dispatch({
                type: 'get-profile',
                profile
            })
        )

        .catch(err => console.error(err));

const updateProfile = (profile, dispatch) => {
    fetch(`${URL}/${profile._id}`, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json()).then(profile =>
        dispatch({
        type: 'update-profile',
        profile
    }));
}


const updateUser = (user, dispatch) => {
    fetch(`${USER_URL}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json()).then(user => dispatch({
        type: 'update-user',
        user
    })).then(window.location.reload);
}

const deleteProfile = (profileID) => {
    fetch(`${URL}/${profileID}`, {
        method: 'DELETE'
    })
}

const deleteUser = (userID) => {
    fetch(`${USER_URL}/${userID}`, {
        method: 'DELETE'
    })
}

const setSession = (json, dispatch) => {
    fetch(`http://localhost:4000/api/session/set/profile/${json}`)
        .then(response => response.json())
        .then(() =>
            dispatch({
                type: 'update-user',
                json
            })
        ).catch(err => console.error(err));
}

export default {
    updateProfile, findProfileById, deleteProfile, updateUser, deleteUser, setSession
}