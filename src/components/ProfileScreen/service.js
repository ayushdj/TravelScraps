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

export const updateProfile = (profile, dispatch) => {
    fetch(`${URL}/${profile._id}`, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json()).then(profile => dispatch({
        type: 'update-profile',
        profile
    }));
}


export const updateUser = (user, dispatch) => {
    fetch(`${USER_URL}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json()).then(user => dispatch({
        type: 'update-user',
        user
    }));
}

export const deleteProfile = (profileID) => {
    fetch(`${URL}/${profileID}`, {
        method: 'DELETE'
    })
}

export const deleteUser = (userID) => {
    fetch(`${USER_URL}/${userID}`, {
        method: 'DELETE'
    })
}

export default {
    updateProfile, findProfileById, deleteProfile, updateUser, deleteUser
}