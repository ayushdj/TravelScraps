const data = {};
const details = (state = data, action) => {
    switch (action.type) {
        case "update-details":
            return action.details

        default:
            return(state);
    }
}

export default details;