import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grommet } from 'grommet'
import './App.css';
// import { StateContext, DispatchContext } from '../state/context'
import { authenticate, authenticationFailure, logout } from '../state/Auth/actions';
// import Navbar from '../components/Navbar';
import MatchAuthenticated from '../components/MatchAuthenticated';
import RedirectUnauthenticated from '../components/RedirectUnauthenticated';
import Login from '../views/Login'
import Signup from '../views/Login/Signup'
import Home from '../views/Home'
// import Baby from '../views/Babies/Baby'

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

type Props = {
  isAuthenticating: boolean,
  isAuthenticated: boolean,
  currentUser: object,
  logout: () => void,
  authenticate: () => void,
  authenticationFailure: () => void,
}

class App extends Component {

  props: Props

  componentDidMount() {
    const token = localStorage.getItem('token');
      if (token !== '' && token !== 'undefined') {
        console.log('Fetching a new token!');
        this.props.authenticate();
      } else {
        this.props.authenticationFailure();
      }
  }

  render() {
    const { currentUser, isAuthenticated, isAuthenticating, logout } = this.props;
    const authProps = { isAuthenticated, isAuthenticating, currentUser };

    return (
      <Router>
        <Grommet theme={ theme }>


          <Switch>
            <MatchAuthenticated path='/' exact component={Home} {...authProps} />

            <RedirectUnauthenticated path='/login' exact component={Login} {...authProps} />
            <RedirectUnauthenticated path='/signup' exact component={ Signup } {...authProps} />
          </Switch>
        </Grommet>
      </Router>
    );
  }

}

export default connect(
  state => ({
    currentUser: state.auth.currentUser,
    isAuthenticating: state.auth.isAuthenticating,
    isAuthenticated: state.auth.isAuthenticated,
  }), { logout, authenticate, authenticationFailure }
)(App);


// <DispatchContext.Provider value={ dispatch }>
//   <StateContext.Provider value={ state }>
//
//   </StateContext.Provider>
// </DispatchContext.Provider>
