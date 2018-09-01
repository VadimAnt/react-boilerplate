import React from 'react';

const PostListComponent = ({ posts }) => {
  const postItems = posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ));
  return (
    <div>
      <h1>Posts</h1>
      {postItems}
    </div>
  );
};

export default PostListComponent;
