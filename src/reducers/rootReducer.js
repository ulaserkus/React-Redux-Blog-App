
const initState = {
    posts: [
        { id: '1', title: "Lorem Ipsum-1", body: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." },
        { id: '2', title: "Lorem Ipsum-2", body: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." },
        { id: '3', title: "Lorem Ipsum-3", body: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." }
    ]
}

const rootReducer = (state = initState, action) => {
    //console.log(action);
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return post.id !== action.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }

    return state;
}

export default rootReducer;