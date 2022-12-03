import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IAuthenticationResponse, IRole } from './../../Interfaces';

const initialState = {
  loading: true,
  isAuthenticated: false,
  isAdmin: false,
  isRegistering: false,
  isDemoUser: false,
  user: {} as IUser,
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
      if (action.payload.roles.some((role: IRole) => role.name === 'Admin')) {
        state.isAdmin = true;
      }
      if (action.payload.roles.some((role: IRole) => role.name === 'Demo')) {
        state.isDemoUser = true;
      }
      if (action.payload.token) {
        localStorage.setItem('token', action.payload.token);
      }
      if (action.payload.id !== 'demo') {
        localStorage.setItem('user', JSON.stringify(action.payload));
      }
      state.loading = false;
    },
    logOut(state) {
      localStorage.clear();
      state = initialState;
    },
  },
});

export const authActions = authState.actions;

export const authReducer = authState.reducer;
