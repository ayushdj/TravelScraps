const URL = 'http://localhost:4000/db/countdown/service';

export const updateCountDown = (dispatch, date) => {
    fetch(URL+`/`+date._id, {
        method: 'PUT',
        body: JSON.stringify(date),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(() => dispatch({
            type: 'new-Counter',
            date: date.date
        }));
}

const findCountDownById = (dispatch, id) =>
    fetch(URL+`/61a5653205c09e2bae5454d1`)
        .then(response => response.json())
        .then(time =>
            dispatch({
                type: 'fetch-count',
                time
            }))
        .catch(err => console.error(err));

export default {
    updateCountDown,
    findCountDownById
}