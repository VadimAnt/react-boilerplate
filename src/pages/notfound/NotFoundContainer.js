import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotFoundComponent from './NotFoundComponent';

import './css/notfound.css';

class NotFoundContainer extends Component {
  render() {
    return <NotFoundComponent />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotFoundContainer);
