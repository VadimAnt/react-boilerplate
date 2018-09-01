import {
  FETCH_POSTS_PENDING,
  FETCH_POSTS_REJECTED,
  FETCH_POSTS_SUCCESS,
  NEW_POSTS,
} from './types';

export const fetchPostsPending = () => {
  return {
    type: FETCH_POSTS_PENDING,
  };
};

export const fetchPostsRejected = payload => {
  return {
    type: FETCH_POSTS_REJECTED,
    payload: payload,
  };
};

export const fetchPostsSuccess = payload => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: payload,
  };
};

export const createPost = payload => {
  return {
    type: NEW_POSTS,
    payload: payload,
  };
};

export default {
  fetchPostsPending,
  fetchPostsRejected,
  fetchPostsSuccess,
  createPost,
};
