import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../features/operations';
import PostForm from './PostFormComponent';

class PostsFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    this.props.createPost(post);
  };

  render() {
    return (
      <PostForm
        title={this.state.title}
        body={this.state.body}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  newPost: state.posts.item,
});

const mapDispatchToProps = dispatch => {
  return {
    createPost,
  };
};

export default connect(
  mapStateToProps,
  { createPost }
)(PostsFormContainer);
