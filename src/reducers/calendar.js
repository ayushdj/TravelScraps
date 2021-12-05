const data = {
    events: [],
    person: ""
};
const calendar = (state = data, action) => {
    switch (action.type) {
        case "fetch-calendar":
            return action.calendar[0];

        default:
            return(state);
    }
}

export default calendar;