import React, {useEffect} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {useDispatch, useSelector} from "react-redux";
import service from "./service";

const calendarState = (state) => state.calendar;
const eventsState = (state) => state.events;
const CalendarScreen = () => {
    const calendarObject = useSelector(calendarState);
    const eventArray = useSelector(eventsState);
    const dispatch = useDispatch();
    // const eventFetchFunction = calendarObject.events.map(id => service.getEventById(dispatch, id));

    // use fetch call in use effect
    useEffect(() => calendarObject, []);
    // useEffect(() => eventFetchFunction, []);
    // useEffect(() => eventArray, []);

    // use a for loop maybe and find event by id for each object in array
    console.log(calendarObject.events);
    // console.log("event array", eventArray);

    function renderEventContent(eventInfo) {
        return (
            <div>
                <p>{eventInfo.event.title}</p>

            </div>
        )
    }

    const handleDateClick = (dateClickInfo) => {
        console.log(dateClickInfo.dateStr)
    }

    const createEventContent = (args) => {
        return(
            <>
                <button className="btn-primary bg-info border-0" onClick={() => saveEvent(args.date)}>
                    {args.dayNumberText}
                </button>
            </>
        )
    }

    const saveEvent = (date) => {
        alert(`You clicked on ${date}`);
    }

    return (
        <div className="mainContainer">
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                dateClick={handleDateClick}
                initialView="dayGridMonth"
                eventContent={renderEventContent}
                dayCellContent={createEventContent}
                events={[]}
            />
        </div>
    );
}
export default CalendarScreen;