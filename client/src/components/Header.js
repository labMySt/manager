import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <nav id="navbar-example2" className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">Manager</a>
        <div className = "nav-log-area">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="sign_up">Sign In</a>
          </li>
          </ul>
        </div>
     </nav>
    );
  }
}

export default Header;
