import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="display-4 mr-4">Ooops!!!</h1>
            <h5 className="display-15">
              You don't have enough roots or this adress not found
            </h5>
          </div>
        </div>
      </div>

    );
  }
}

export default NotFound;
