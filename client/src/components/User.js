import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="display-4 mr-4">This is User Page</h1>

          </div>
        </div>
      </div>

    );
  }
}
const mapStateToUserProps = (state) => {
  return{user: state.user}
};

export default connect(mapStateToUserProps)(User);
