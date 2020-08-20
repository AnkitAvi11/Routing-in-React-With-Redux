export const getAllPosts = () => {
    return async (dispatch, getState) => {
        let posts = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json()
        dispatch({
            type : 'GET_POSTS',
            payload : posts
        })
    }
}

export const getPostAndUser = (blog_id, user_id) => {
    return async (dispatch, getState) => {
        await dispatch(getPost(blog_id, user_id));
        let state = getState()
        await dispatch(getUser(state.selectedPost.userId))
    }
}

export const getPost = (blog_id) => {
    return async (dispatch) => {
        let post = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${blog_id}`)).json();
        dispatch({
            type : 'GET_POST',
            payload : post
        })
    }
}

const getUser = (user_id) => {
    return async (dispatch) => {
        let user = await (await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`)).json()
        dispatch ({
            type : 'GET_USER',
            payload : user
        })
    }
}