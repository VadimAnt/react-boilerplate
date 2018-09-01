import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostList from './PostListComponent';
import { fetchPosts } from '../features/operations';
import './css/postList.css';

class PostsListContainer extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    newPost: PropTypes.object,
  };

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
