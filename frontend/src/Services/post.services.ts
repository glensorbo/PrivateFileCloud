import { postActions } from './../Store/State/post.state';
import { AppDispatch } from '../Store';

import { demoServices } from './demo.services';
import { IComment } from '../Interfaces';
import { API } from '../Lib';

export const postServices = {
  load(isDemoUser: boolean) {
    return async (dispatch: AppDispatch) => {
      try {
        if (isDemoUser) {
          dispatch(demoServices.loadDemoPosts());
          return;
        }
        const { data } = await API.get('/posts');
        dispatch(postActions.loadPosts(data));
      } catch (error) {
        dispatch(postActions.setLoading(false));
      }
    };
  },
  likePostToggle(
    postId: string,
    userId: string,
    liked: boolean,
    isDemoUser: boolean
  ) {
    return async (dispatch: AppDispatch) => {
      if (isDemoUser) {
        dispatch(demoServices.likePostToggle(postId, userId, liked));
        return;
      }
    };
  },
  addComment(
    comment: IComment,
    postId: string,
    userId: string,
    isDemoUser: boolean
  ) {
    return async (dispatch: AppDispatch) => {
      if (isDemoUser) {
        dispatch(demoServices.addComment(comment, postId, userId));
        return;
      }
    };
  },
};
