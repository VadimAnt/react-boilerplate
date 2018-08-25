const domain = process.env.REACT_APP_DOMAIN;
export default {
  getPosts() {
    return fetch(`${domain}/posts`)
      .then(res => res.json())
      .then(posts => posts);
  },

  createPost(postData) {
    return fetch(`${domain}/posts`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then(res => res.json())
      .then(post => post);
  },
};
