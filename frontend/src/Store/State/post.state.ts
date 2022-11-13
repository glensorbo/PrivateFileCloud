import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  posts: [],
};

const postState = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const postActions = postState.actions;

export const postReducer = postState.reducer;
