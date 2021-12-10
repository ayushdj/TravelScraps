const date = '00-00-0000';
const counter = (state = date, action) => {
    switch (action.type) {
        case "new-Counter":
            if (action.date === null || action.date === 'undefined') {
                return null;
            }
            else {
                return(action.date);
            }
        case "fetch-count":
            let newCount = action.time;
            if (newCount.length === 0) {
                return null;
            }
            return action.time[0];
        default:
            return(state);
    }
}

export default counter;