import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IAuthenticationResponse } from './../../Interfaces';

const initialState = {
  loading: true,
  isAuthenticated: false,
  isAdmin: false,
  isRegistering: false,
  user: {} as IUser | null,
};

const authState = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setIsRegistering(state, action: PayloadAction<boolean>) {
      state.isRegistering = action.payload;
    },
    login(state, action: PayloadAction<IAuthenticationResponse>) {
      state.isAuthenticated = true;
      state.isRegistering = action.payload.isRegistering;
      state.user = action.payload;
      if (action.payload.roles.some((role: any) => role.name === 'Admin')) {
        state.isAdmin = true;
      }
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload));
      state.loading = false;
    },
    logOut(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state = initialState;
    },
  },
});

export const authActions = authState.actions;

export const authReducer = authState.reducer;
