const data = [];
const _ = require('lodash');

const comments = (state = data, action) => {
    switch (action.type) {
        case "fetch-comment":
            return (state);

        case "delete-comment":
            return state.filter(comment => comment._id !== action.comment._id);

        case "add-comment":
            if (state.some(obj => _.isEqual(obj, action.comment))) {
                return state;
            }
            else {
                return [
                    ...state,
                    action.comment
                ];
            }

        default:
            return(state);
    }
}

export default comments;