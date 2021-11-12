import data from './data/profileData.json'

const profile = (state = data, action) => {
    switch (action.type) {
        case "save-changes":
            const newState = {
                "firstName": action.firstName,
                "lastName" :action.lastName,
                "handle":action.username,
                "emailAddress":action.emailAddress,
                "profilePicture":"../../../images/profilePic.png",
                "bannerPicture": "../../../images/editProfileBackground.jpg",
                "bio":action.bio,
                "location":action.location,
                "dateOfBirth":action.birthday,
                "dateJoined": "June 2013",
                "followingCount": 69,
                "followersCount": 420
            }
            return(newState);
        default:
            return(state);
    }
}

export default profile;