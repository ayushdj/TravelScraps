const data = [];
const events = (state = data, action) => {
    switch (action.type) {
        case "fetch-event":
            return (state);

        case "delete-event":
            return state.filter(event => event._id !== action.event._id);

        case "add-event":
            console.log("this event", action.event)
            return [
                ...state,
                action.event
                ];

        default:
            return(state);
    }
}

export default events;