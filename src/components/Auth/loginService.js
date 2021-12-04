const URL = 'http://localhost:4000/db/person';

const findProfileByUsername = (dispatch, username, password) =>
    fetch(`${URL}/${username}/${password}`)
        .then(response => response.json())
        .then(profile =>
                   dispatch({
                                type: 'update-profile',
                                profile
                            })
        )
        .catch(err => console.error(err));

export default {
    findProfileByUsername
};