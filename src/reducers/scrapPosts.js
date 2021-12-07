import data from './data/scrapPost.json'

const scrapPost = (state = data, action) => {
    switch (action.type) {
        case 'update-post':
            return (action.post);
        default:
            return(state);
    }

}

export default scrapPost;