import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from './features/post.actions';
import PostsComponent from './posts.component';
import './posts.page.css';

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});

const mapDispatchToProps = dispatch => {
  fetchPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsComponent);
// class Posts extends Component {
//   componentWillMount() {
//     console.log('WillMount');
//     this.props.fetchPosts();
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.newPost) {
//       this.props.posts.unshift(nextProps.newPost);
//     }
//   }

//   render() {
//     const postItems = this.props.posts.map(post => (
//       <div key={post.id}>
//         <h3>{post.title}</h3>
//         <p>{post.body}</p>
//       </div>
//     ));
//     return (
//       <div>
//         <Postform />
//         <h1>Posts</h1>
//         { postItems }
//       </div>
//     );
//   }
// }

// Posts.propTypes = {
//   fetchPosts: propTypes.func.isRequired,
//   posts: propTypes.array.isRequired,
//   newPost: propTypes.object,
// };




