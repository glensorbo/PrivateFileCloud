import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showAddCommentInput: false,
  showAddPostButton: true,
  showLikedHeart: false,
};

const uiState = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleShowAddCommentInput(state) {
      state.showAddCommentInput = !state.showAddCommentInput;
    },
    toggleShowAddPostButton(state) {
      state.showAddPostButton = !state.showAddPostButton;
    },
    toggleShowLikedHeart(state) {
      state.showLikedHeart = !state.showLikedHeart;
    },
  },
});

export const uiActions = uiState.actions;

export const uiReducer = uiState.reducer;
