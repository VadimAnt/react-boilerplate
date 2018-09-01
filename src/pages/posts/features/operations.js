// HERE ASYNC, NON Async operations, fetch data ...
const domain = process.env.REACT_APP_DOMAIN;
const actions = require('./actions');

export const fetchPosts = () => {
  return dispatch => {
    dispatch(actions.fetchPostsPending());
    return fetch(`${domain}/posts`)
      .then(res => res.json())
      .then(posts => {
        dispatch(actions.fetchPostsSuccess(posts));
      })
      .catch(error => {
        dispatch(actions.fetchPostsRejected(error));
      });
  };
};

export const createPost = postData => {
  return dispatch => {
    return fetch(`${domain}/posts`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then(res => res.json())
      .then(post => {
        dispatch(actions.createPost(post));
      });
  };
};
