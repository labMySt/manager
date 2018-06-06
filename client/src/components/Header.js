import React, { Component } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <nav id="navbar-example2" className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">Manager</a>
        {!this.props.user &&
          <div className = "nav-log-area">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="sign_up">Sign In</a>
            </li>
            </ul>
          </div>}
          {this.props.user &&
            <div className = "nav-log-area">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link" href="/auth/logout">Log out</a>
              </li>
              </ul>
            </div>}
     </nav>
    );
  }
}
const mapStateToHeaderProps = (state) => {
  return{user: state.user,
         authFatching: state.authFatching}
};

export default connect(mapStateToHeaderProps)(Header);
