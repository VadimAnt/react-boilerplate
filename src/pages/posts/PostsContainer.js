import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostsComponent from './PostsComponent';
import './css/posts.css';

class PostsContainer extends Component {
  render() {
    return <PostsComponent />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsContainer);
