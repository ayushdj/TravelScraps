const URL = 'http://localhost:4000/db/countdown/service';

export const createCountDown = async(dispatch, id) => {
    alert(`countdown id ${id}`)
    await fetch(URL, {
        method: 'POST',
        body: JSON.stringify({person: id, date: ""}),
        headers: {
            'content-type': 'application/json'
        }
    })
        // .then(response => response.json())
        // .then(countDown => dispatch({
        //     type: 'new-Counter',
        //     countDown
        // }));
}



export const updateCountDown = (dispatch, date) => {
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
                time: time
            })).then(time => {
        return time
    })
        .catch(err => console.error(err));

export default {
    createCountDown,
    updateCountDown,
    findCountDownById
}