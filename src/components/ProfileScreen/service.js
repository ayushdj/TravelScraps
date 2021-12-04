const URL = 'http://localhost:4000/db/person';

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
    console.log("we are in client side function");
    console.log(profile._id);
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
export default {
    updateProfile, findProfileById
}