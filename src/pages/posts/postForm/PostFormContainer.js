import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../features/operations';
import PostForm from './PostFormComponent';

class PostsFormContainer extends Component {
  static propTypes = {
    newPost: PropTypes.object.isRequired,
    createPost: PropTypes.func.isRequired,
  };

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

export default connect(
  mapStateToProps,
  { createPost }
)(PostsFormContainer);
