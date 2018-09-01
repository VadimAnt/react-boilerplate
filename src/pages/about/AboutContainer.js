import React, { Component } from 'react';
import { connect } from 'react-redux';
import AboutComponent from './AboutComponent';
import './css/about.css';

class AboutContainer extends Component {
  render() {
    return <AboutComponent routes={this.props.routes} />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutContainer);
