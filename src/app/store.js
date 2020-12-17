import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../components/blogSlice';

export default configureStore({
  reducer: {
    blog: blogReducer,
  },
});
