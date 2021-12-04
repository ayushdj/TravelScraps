import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const CalendarScreen = () => {
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
                events={[
                    { title: 'event 1', date: '2021-12-13'},
                { title: 'event 2', date: '2021-12-15'}
                ]}
            />
        </div>
    );
}
export default CalendarScreen;