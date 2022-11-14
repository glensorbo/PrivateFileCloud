import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  shouldNavigate: false,
  showAddCommentInput: false,
  showAddPostButton: true,
  showLikedHeart: false,
};

const uiState = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setShouldNavigate(state, action: PayloadAction<boolean>) {
      state.shouldNavigate = action.payload;
    },
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
