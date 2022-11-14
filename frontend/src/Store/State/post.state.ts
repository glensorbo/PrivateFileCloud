import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IComment, IPost } from './../../Interfaces';

const initialState = {
  loading: true,
  posts: [] as IPost[],
};

const postState = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    loadPosts(state, action: PayloadAction<IPost[]>) {
      state.posts = action.payload;
      state.loading = false;
    },
    addLike(state, action: PayloadAction<{ postId: string; userId: string }>) {
      const index = state.posts.findIndex(
        (post) => post.id === action.payload.postId
      );
      state.posts[index].likes.push(action.payload.userId);
    },
    removeLike(
      state,
      action: PayloadAction<{ postId: string; userId: string }>
    ) {
      const index = state.posts.findIndex(
        (post) => post.id === action.payload.postId
      );

      state.posts[index].likes = state.posts[index].likes.filter(
        (id) => id !== action.payload.userId
      );
    },
    addComment(
      state,
      action: PayloadAction<{
        comment: IComment;
        postId: string;
        userId: string;
      }>
    ) {
      const index = state.posts.findIndex(
        (post) => post.id === action.payload.postId
      );
      state.posts[index].comments.push(action.payload.comment);
    },
  },
});

export const postActions = postState.actions;

export const postReducer = postState.reducer;
