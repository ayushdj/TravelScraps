const CALENDAR_URL = 'http://localhost:4000/db/calendar';
const EVENT_URL = 'http://localhost:4000/db/event/service';

const findCountCalendarByPersonId = (dispatch, id) =>
    fetch(`${CALENDAR_URL}/${id}`)
        .then(response => response.json())
        .then(calendar => {
            dispatch({
                type: 'fetch-calendar',
                calendar
            })
        });

const createCalendar = async (dispatch, calendar) =>
    await fetch(CALENDAR_URL, {
        method: 'POST',
        body: JSON.stringify(calendar),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        // .then(calendar =>
        //     dispatch({
        //         type: 'fetch-calendar',
        //         calendar
        //     }));


const getEventById = (dispatch, eventId) => {
    fetch(`${EVENT_URL}/${eventId}`)
        .then(response => {
            return response.json()
        })
        .then(event => {
            dispatch({
                type: 'add-event',
                event
            })
        });
}

const createEvent = (dispatch, event) =>
    fetch(EVENT_URL, {
        method: 'POST',
        body: JSON.stringify(event),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(event => {
            dispatch({
                type: 'add-event',
                event
            })
            return event._id
        });


const updateCalendar = (dispatch, id, newCalendar) => {
    fetch(`${CALENDAR_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(newCalendar),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())}


export const deleteEvent = (dispatch, eventId, newCalendar, calendarId) => {
    fetch(`${EVENT_URL}/${eventId}`, {
        method: 'DELETE'
    }).then(response => {return response.json()})
        .then(() => {
            updateCalendar(dispatch, calendarId, newCalendar)
        })
        .then(() => {
            findCountCalendarByPersonId(dispatch, newCalendar.person)
        }).then (() =>
        window.location.reload()
    )

}






export default {
    findCountCalendarByPersonId, createCalendar, getEventById, createEvent, updateCalendar, deleteEvent
}