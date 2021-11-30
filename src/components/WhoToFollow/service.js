const URL = 'http://localhost:4000/rest/who';
//const URL = 'https://web-dev-node-pripat.herokuapp.com/rest/who';

export const findAllWho = (dispatch) =>
    fetch(URL)
        .then(response => response.json())
        .then(who =>
            dispatch({
                type: 'fetch-all-who',
                who
            }));



export default {
    findAllWho
};