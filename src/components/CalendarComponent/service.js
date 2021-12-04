const URL = 'http://localhost:4000/db/calendar';

const findCountCalendarByPersonId = (dispatch, id) =>
    fetch(URL + `/61943171601daea7ccd0d7c6`)
        .then(response => response.json())
        .then(calendar => dispatch({
            type: 'fetch-calendar',
            calendar
        }));

export default {
    findCountCalendarByPersonId
}