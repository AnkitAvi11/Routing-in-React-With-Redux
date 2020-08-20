
export const posts = (state=null, action) => {
    switch(action.type) {
        case 'GET_POSTS' : 
            return action.payload;
        default : 
            return state;
    }
}

export const selectedPost = (state=null, action) => {
    if(action.type === 'GET_POST') {
        return action.payload;
    }
    return state;
}