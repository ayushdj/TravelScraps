const data = {
    events: [],
    person: ""
};
const calendar = (state = data, action) => {
    switch (action.type) {
        case "fetch-calendar":
            if (action.calendar.length < 1) {
                return (state)
            } else {
                return action.calendar[0];
            }

        default:
            return(state);
    }
}

export default calendar;