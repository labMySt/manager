import React, { Component } from 'react';
import Login from './Login';

class Welcome extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="display-4 mr-4">Welcome</h1>
            <h5 className="display-15">
              This app help you to manage organizational structure
              for parent and child companies.
            </h5>
            <a href = "/login" className="btn btn-lg btn-info mr-2" >Login</a>
          </div>
        </div>
      </div>

    );
  }
}

export default Welcome;
