import { FETCH_POSTS, NEW_POSTS } from './types';
const domain = process.env.REACT_APP_DOMAIN;

export const fetchPosts = () => dispatch => {
  fetch(`${domain}/posts`)
    .then(res => res.json())
    .then(posts => {
      dispatch({ type: FETCH_POSTS, payload: posts })
    });
}

export const createPost = (postData) => dispatch => {
  fetch(`${domain}/posts`,{ 
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData),
    })
    .then(res => res.json())
    .then(post =>  {
      dispatch({ type: NEW_POSTS, payload: post })
    });
}