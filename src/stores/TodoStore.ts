import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../stores/slices/todoSlice';

export const todoStore = configureStore({
  reducer: {
    todo: todoReducer,
  },
});


// Infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof todoStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof todoStore.dispatch;
