const URL = 'http://localhost:4000/db/person';

export const createPerson = (person) =>
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(person),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(response => console.log(response));

export default {
    createPerson
};
