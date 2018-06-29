
/***
@Author :Abdelhamid.BELGACEM   
@ 28 Juin 2018
@ 11:26:42 
@LANSROD GROUP
@ Mathurins 75008
***/

import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Route, IndexRoute, Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import store from './store';
import { Auth } from './services/Auth';
import {
  Login
} from './containers/index';

require('./app.scss');

const history = syncHistoryWithStore(hashHistory, store);

let App = ({children}) => {
  return (
    <div>
      <Navbar>
        <Nav>
          <IndexLinkContainer to="/">
          </IndexLinkContainer>
          </LinkContainer>
        </Nav>
        {Auth.authenticated() && <Nav className="pull-right">
          <NavItem onClick={Auth.logout.bind(this)}>Logout</NavItem>
        </Nav>}
        {!Auth.authenticated() && <Nav className="pull-right">
          <LinkContainer to="/login">
            <NavItem>Login</NavItem>
          </LinkContainer>
        </Nav>}
      </Navbar>
      <div className="container">
        {children}
      </div>
    </div>
  );
}



export default () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/login" component={Login} />
        <Route path="/" component={App}>
        </Route>
      </Router>
    </Provider>
  )
}
