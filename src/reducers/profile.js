import data from './data/profileData.json'

const profile = (state = data, action) => {
    switch (action.type) {
        case "save-profile-changes":
            const profileState = {
                "firstName": action.firstName,
                "lastName" :action.lastName,
                "handle":action.handle,
                "emailAddress":action.emailAddress,
                "profilePicture":action.profilePicture,
                "bannerPicture":action.bannerPicture,
                "bio":action.bio,
                "location":action.location,
                "dateOfBirth":action.birthday,
                "password":action.password,
                "dateJoined": action.dateJoined,
                "followingCount": 69,
                "followersCount": 420,
                "website":action.website
            }
            return(profileState);
        case "save-new-settings":
            return {
                "firstName": action.firstName,
                "lastName": action.lastName,
                "handle": action.handle,
                "emailAddress": action.emailAddress,
                "profilePicture": action.profilePicture,
                "bannerPicture": action.bannerPicture,
                "bio": action.bio,
                "password": action.password,
                "location": action.location,
                "dateOfBirth": action.dateOfBirth,
                "dateJoined": action.dateJoined,
                "followingCount": action.followingCount,
                "followersCount": action.followersCount,
                "website":action.website
            };
        default:
            return(state);
    }
}

export default profile;