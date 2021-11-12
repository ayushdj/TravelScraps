/**
* This function validates the user's email. If the user doesn't contain an "@" symbol
* then we throw an error letting that user know
* @param {*} emailString 
*/
export function validateEmail(emailString) {

 // split on the '@' sign
 let emailArray = emailString.split('@');

 // initialize a boolean to see if the length
 // of the array is greater than 2
 let valid;

 // only if the length of the email array is greater
 // than 1 do we set valid to be true, otherwise false
 emailArray.length > 1 ? valid = false : valid = true;

 // return the boolean we just created
 return valid;
}

/**
 * This function validates the bio field. If the user has entered a
 * string that is greater than 256 characters in length, then we return
 * true, otherwise we return false
 * @param {*} bio 
 */
export function validateBio(bio) {
    // boolean to represent if the character limit has been exceeded
    let charLimitExceeded;

    // if the length of the bio string is greater than 256 characters,
    // we set the boolean to be true. Otherwise its false.
    bio.length > 255 ? charLimitExceeded = true : charLimitExceeded = false;

    // return boolean representing whether the character limit has
    // been exceeded. 
    return charLimitExceeded;
}

export function validateUsername(username) {
    // boolean representing username character limit
    let usernameCharLimit;

    // set to true if character limit exceeds 30 characters, false otherwise
    username.length > 29 ? usernameCharLimit = true : usernameCharLimit = false;

    // return boolean
    return usernameCharLimit;
}