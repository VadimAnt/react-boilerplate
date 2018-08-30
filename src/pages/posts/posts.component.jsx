import React from 'react';
import Postform from '../../components/postform/postform.component';

class Posts extends Component {
    componentWillMount() {
      console.log('WillMount');
      this.props.fetchPosts();
    }
  
    componentWillReceiveProps(nextProps) {
      if (nextProps.newPost) {
        this.props.posts.unshift(nextProps.newPost);
      }
    }
  
    render() {
      const postItems = this.props.posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ));
      return (
        <div>
          <Postform />
          <h1>Posts</h1>
          { postItems }
        </div>
      );
    }
  }




function PostsComponent({
  posts,
  newPost,
  fetchPosts
}) {

  const postItems = this.props.posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ));
  return (
    <div>
        <Postform />
        <h1>Posts</h1>
        { postItems }
      </div>
  )
}

export default HomeComponent;