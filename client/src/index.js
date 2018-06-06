import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import App from './components/App';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Welcome from './components/Welcome';
import reduser from './redusers';

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reduser, middleware);


ReactDOM.render(
  <Provider store = {store}>
    <Router>
        <App>
          <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route path="/sign_up" component={SignUp}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </App>
      </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
