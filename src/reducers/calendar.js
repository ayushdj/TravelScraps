const data = {};
const calendar = (state = data, action) => {
    switch (action.type) {
        case "fetch-calendar":
            return action.calendar;
        default:
            return(state);
    }
}

export default calendar;