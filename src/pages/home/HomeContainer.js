import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import './css/home.css';

class HomeContainer extends Component {
  render() {
    return <HomeComponent />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
