import React, {useEffect, useState} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {useDispatch, useSelector} from "react-redux";
import service from "./service";
import {useHistory} from "react-router-dom";

const calendarState = (state) => state.calendar;
const eventsState = (state) => state.events;

const CalendarScreen = () => {
    const [user, setUser] = useState({});
    const [eventList, setEventList] = useState([]);
    const history = useHistory();
    const getProfile = async () => {
        fetch(`http://localhost:4000/api/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user);
                // if (user._id !== null) {
                //     service.findCountCalendarByPersonId(dispatch, user._id)
                // }
            }).catch(() => history.push('/login'));
    }

    useEffect(getProfile, [history]);


    const calendarObject = useSelector(calendarState);
    const eventArray = useSelector(eventsState);
    const dispatch = useDispatch();
    // const eventFetchFunction = calendarObject.events.map(id => service.getEventById(dispatch, id));
    let eventNum = calendarObject.events.length;

    // const eventArray = useSelector(eventsState);
    // const eventArray = calendarObject.events
    useEffect(() =>  service.findCountCalendarByPersonId(dispatch, user._id), [user]);


    // const eventFetchFunction = calendarObject.events.map(id => service.getEventById(dispatch, id));



    const populateData = async () => {
        for (let i = 0; i < calendarObject.events.length; i++) {
            let id = calendarObject.events[i];
            await service.getEventById(dispatch, id);
        }
        console.log("Calling backend");
    }

    useEffect(() => populateData(), [eventNum]);

    const handleDateClick = async (dateClickInfo) => {
        const formatedDate = dateClickInfo.dateStr
        let title = prompt("Please enter title of your new plan:", "Home");
        if (title !== null && title !== "") {
            const newEvent = {title: title, date: formatedDate }
            await service.createEvent(dispatch, newEvent)
                .then( (eventId) => {
                    const newCalendar = {...calendarObject, events: [...calendarObject.events, eventId]}
                    service.updateCalendar(dispatch, calendarObject._id, newCalendar)
                }).then(() =>
                    service.findCountCalendarByPersonId(dispatch, calendarObject.person)
                ).then(() => eventNum += 1);
        }
    }


    const handleEventClick = (info) => {
        if (window.confirm("Delete this event?")) {
            const deletedEvent = eventArray.find((event) => event.title === info.event.title)
            const newCalendar = {
                ...calendarObject,
                events: calendarObject.events.filter((eventId) => eventId !== deletedEvent._id)
            }
            service.deleteEvent(dispatch, deletedEvent._id, newCalendar, calendarObject._id)
            if (window.confirm("Delete is successful")) {
                eventNum -= 1
            } else {
                eventNum -= 1
            }

        }


    }


    return (
        <div className="mainContainer">
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                dateClick={handleDateClick}
                eventClick={handleEventClick}
                initialView="dayGridMonth"
                events={eventArray}
            />
        </div>
    );
}
export default CalendarScreen;