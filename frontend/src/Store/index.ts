import { configureStore } from '@reduxjs/toolkit';
import { authReducer, uiReducer } from './State';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
