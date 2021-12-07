const URL = 'http://localhost:4000/db/countdown/service';

export const updateCountDown = (dispatch, date) => {
    //console.log("Updates countdown", URL+`/`+date._id);
    fetch(URL+`/`+date._id, {
        method: 'PUT',
        body: JSON.stringify(date),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(date => dispatch({
            type: 'new-Counter',
            date
        }));
}

const findCountDownById = (dispatch, id) =>
    fetch(URL+`/`+id)
        .then(response =>  response.json())
        .then(time =>
            dispatch({
                type: 'fetch-count',
                time
            })).then(time => {
        return time
    })
        .catch(err => console.error(err));

export default {
    updateCountDown,
    findCountDownById
}