import { FETCH_POSTS, NEW_POSTS } from './types';
import postsService from '../services/posts.service';

export const fetchPosts = () => (dispatch) => {
  postsService.getPosts().then((posts) => {
    dispatch({ type: FETCH_POSTS, payload: posts });
  });
};

export const createPost = postData => (dispatch) => {
  postsService.createPost(postData)
    .then((post) => {
      dispatch({ type: NEW_POSTS, payload: post });
    });
};
