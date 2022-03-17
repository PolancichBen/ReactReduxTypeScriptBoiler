import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { accountReducer } from './account';
import { siteReducer } from './site';

export const store = configureStore({
  reducer: {
    account: accountReducer,
    site: siteReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
