import axios from 'axios';

import { AppDispatch } from '../Store';
import { postActions, authActions, uiActions } from './../Store/State';

import { IAuthenticationResponse, IPost, IComment, IUser } from '../Interfaces';

import { adventurerUrl, avatarUrl, sleep } from '../Utils';

export const demoServices = {
  loginDemoUser() {
    return async (dispatch: AppDispatch) => {
      dispatch(authActions.login(demoUser));
    };
  },
  loadDemoPosts() {
    return async (dispatch: AppDispatch) => {
      const posts = await createDemoPosts();
      await sleep(500);
      dispatch(postActions.loadPosts(posts));
    };
  },
  likePostToggle(postId: string, userId: string, liked: boolean) {
    return async (dispatch: AppDispatch) => {
      if (!liked) {
        dispatch(uiActions.toggleShowLikedHeart());
        dispatch(postActions.addLike({ postId, userId }));
        await sleep(3000);
        dispatch(uiActions.toggleShowLikedHeart());
      } else {
        dispatch(postActions.removeLike({ postId, userId }));
      }
    };
  },
  addComment(comment: IComment, postId: string, userId: string) {
    return async (dispatch: AppDispatch) => {
      dispatch(postActions.addComment({ comment, postId, userId }));
    };
  },
};

const demoUser: IAuthenticationResponse = {
  id: 'demo',
  email: 'demo@glensorbo.com',
  firstName: 'Demo',
  lastName: 'User',
  isLoggingIn: true,
  isRegistering: false,
  originalProfileImage: `${adventurerUrl}/Demo User.svg`,
  webpProfileImage: `${adventurerUrl}/Demo User.svg`,
  status: 'demo',
  token: 'demo',
  roles: [
    {
      id: 'demo',
      name: 'Demo',
    },
  ],
};

const createDemoPosts = async () => {
  const { data: users } = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  const { data: posts } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );

  const demoPosts = [];

  for (let i = 0; users.length > i; i++) {
    const comment: IComment = {
      created: Date.now().toLocaleString(),
      creator: users[i].name,
      likes: [],
      text: posts[i].body,
      replies: [],
    };

    const images = [
      `${avatarUrl}/${users[i].name}.svg`,
      `${avatarUrl}/${users[i].username}.svg`,
      `${avatarUrl}/${users[i].address.street}.svg`,
      `${avatarUrl}/${users[i].address.city}.svg`,
    ];

    const creator: IUser = {
      id: users[i].id,
      email: users[i].email,
      firstName: users[i].name.split(' ')[0],
      lastName: users[i].name.split(' ')[1],
      originalProfileImage: `${adventurerUrl}/${users[i].name}.svg`,
      webpProfileImage: `${adventurerUrl}/${users[i].name}.svg`,
    };

    const post: IPost = {
      id: users[i].id,
      creator,
      title: posts[i].title,
      likes: [],
      images,
      comments: [comment],
      created: Date.now().toLocaleString(),
    };
    demoPosts.push(post);
  }

  return demoPosts;
};
