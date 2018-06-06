import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import * as actions from '../actions';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="cover-container">
         <Header/>
           {this.props.children}
      </div>

    );
  }
}

export default connect(null, actions)(App);
