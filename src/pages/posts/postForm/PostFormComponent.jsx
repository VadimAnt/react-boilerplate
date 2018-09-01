import React from 'react';

const PostFormComponent = ({ title, body, onSubmit, onChange }) => {
  return (
    <div>
      <h1 className="test">Add post</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" onChange={onChange} value={title} />
        </div>
        <br />
        <div>
          <label>Body:</label>
          <input type="text" name="body" onChange={onChange} value={body} />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostFormComponent;
