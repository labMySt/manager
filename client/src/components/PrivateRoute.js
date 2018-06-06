import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect} from 'react-router-dom';
import NotFound from './NotFound';

class PrivateRoute extends Component {
  render() {
    return (
      <div>
        {this.props.user && <this.props.component/>}
        {!this.props.user && <NotFound/>}
      </div>
      );
  }
}
const mapStateToPrivateRouteProps = (state) => {
  return{user: state.user}
};

export default connect(mapStateToPrivateRouteProps)(PrivateRoute);
