const date = '00-00-0000';
const profile = (state = date, action) => {
    switch (action.type) {
        case "new-Counter":
            if (action.date === null || action.date === 'undefined') {
                return null;
            }
            else {
                return(action.date);
            }
        case "fetch-count":
            return action.time.date;
        default:
            return(state);
    }
}

export default profile;