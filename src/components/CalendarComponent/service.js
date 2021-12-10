const CALENDAR_URL = 'http://localhost:4000/db/calendar';
const EVENT_URL = 'http://localhost:4000/db/event/service';

const TYPE_URL = 'http://localhost:4000/db/type';

const findCountCalendarByPersonId = (dispatch, id) =>
    fetch(`${CALENDAR_URL}/${id}`)
        .then(response => response.json())
        .then(calendar => {
            dispatch({
                type: 'fetch-calendar',
                calendar
            })
        });

const findTravelerCalendar = (personId, eventId) =>
    fetch(`${CALENDAR_URL}/${personId}`)
        .then(response => response.json())
        .then(addedCalendar => {
            const calendar = addedCalendar[0]
            console.log("find traveler calendar", calendar)
            const newCalendar = {...calendar, events: [...calendar.events, eventId]}
            updateTravelerCalendar(calendar._id, newCalendar)
        })

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

const createEventForTraveler = (event) =>
    fetch(EVENT_URL, {
        method: 'POST',
        body: JSON.stringify(event),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(event => {
            return event._id
        })

const sendEventToTraveler = (personId, event) =>
        createEventForTraveler(event)
            .then(eventId => {
                console.log("traveler personId", personId)
                console.log("traveler eventId", eventId)
                findTravelerCalendar(personId, eventId)

            })



const updateCalendar = (dispatch, id, newCalendar) => {
    fetch(`${CALENDAR_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(newCalendar),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())}

const updateTravelerCalendar = (id, newCalendar) => {
    fetch(`${CALENDAR_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(newCalendar),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

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

const findByType = (type, setTravelers) => {
    fetch(`${TYPE_URL}/${type}`)
        .then(response => response.json())
        .then(travelers => setTravelers(travelers))

}




export default {
    findCountCalendarByPersonId, createCalendar, getEventById, createEvent, updateCalendar, deleteEvent, findByType, sendEventToTraveler
}