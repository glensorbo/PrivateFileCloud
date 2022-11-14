import { configureStore } from '@reduxjs/toolkit';
import { authReducer, postReducer, uiReducer } from './State';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    posts: postReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
