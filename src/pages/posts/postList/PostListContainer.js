import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../features/operations';
import PostList from './PostListComponent';
import './css/postList.css';

class PostsListContainer extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    return <PostList posts={this.props.posts} />;
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsListContainer);
