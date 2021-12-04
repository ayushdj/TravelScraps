const URL = 'http://localhost:4000/db/person';

const findProfileByUsername = (dispatch, username, password) =>
    fetch(`${URL}/${username}/${password}`)
        .then(response => response.json())
        .then(person =>
                   dispatch({
                                type: 'get-profile',
                                person
                            })
        )
        .catch(err => console.error(err));

export default {
    findProfileByUsername
};