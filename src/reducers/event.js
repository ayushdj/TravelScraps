const data = [];
const _ = require('lodash');

const events = (state = data, action) => {
    switch (action.type) {
        case "fetch-event":
            return (state);

        case "delete-event":
            return state.filter(event => event._id !== action.event._id);

        case "add-event":
            if (state.some(obj => _.isEqual(obj, action.event))) {

                return state;
            }
           else {
                return [
                    ...state,
                    action.event
                ];
            }

        default:
            return(state);
    }
}

export default events;