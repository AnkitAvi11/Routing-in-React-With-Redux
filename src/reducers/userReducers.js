export const selectedUser = (state=null, action) => {
    if(action.type === 'GET_USER') {
        return action.payload;
    }
    return state;
}