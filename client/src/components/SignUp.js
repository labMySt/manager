import React, { Component } from 'react';

class SignUp extends Component {
  render(){
    return(

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="display-4 mr-4">Sign Up</h2>
              <form>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" name="email"/>
                  <small  className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Password" name="password"/>
                </div>
                <div className="form-group">
                  <label>Confirm password</label>
                  <input type="password" className="form-control" placeholder="Confirm password" name="confirmPassword"/>
                </div>
                <button type="submit" className="btn btn-lg btn-info mr-4">Submit</button>
             </form>
           </div>
         </div>
       </div>
    )
  }
};

export default SignUp;
