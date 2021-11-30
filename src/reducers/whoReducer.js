import whoJson from '../data/who.json';

const whoReducer = (state = whoJson, action) => {
    switch (action.type) {
        case 'fetch-all-who':
            return (action.who);
        default:
            return (state);
    }
}

export default whoReducer;
