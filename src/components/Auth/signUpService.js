const URL = 'http://localhost:5000/db/persons/service';

export const createPerson = (person) =>
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(person),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());



export default {
    createPerson
};
