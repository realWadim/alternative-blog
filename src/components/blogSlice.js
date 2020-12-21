import { createSlice } from '@reduxjs/toolkit';

export const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        posts: [],
    },
    reducers: {
        addPost: (state, action) => {
            state.posts.push({"title": `hello${state.posts.length}!!`, "body": "Im a test content "});
        },
        setPosts: (state, action) => {
            state.posts = action.payload.results
        }
    },
});

export const { addPost, setPosts } = blogSlice.actions;

export const fetchPosts = () => dispatch => {
    fetch('/api/posts/')
        .then(response => response.json())
        .then(json => dispatch(setPosts(json)))
};

export const selectPosts = state => state.blog.posts;

export default blogSlice.reducer;
