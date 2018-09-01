import React from 'react';
import PostList from './postList/PostListContainer';
import PostForm from './postForm/PostFormContainer';

const PostComponent = () => {
  return (
    <div>
      <h1>Posts</h1>
      <PostForm />
      <PostList />
    </div>
  );
};

export default PostComponent;
