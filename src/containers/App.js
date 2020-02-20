import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grommet } from 'grommet'
import './App.css';
// import { StateContext, DispatchContext } from '../state/context'
import { authenticate, authenticationFailure, logout } from '../state/Auth/actions';
import MatchAuthenticated from '../components/MatchAuthenticated';
import RedirectUnauthenticated from '../components/RedirectUnauthenticated';
import Navbar from '../components/Navbar'
import Login from '../views/Login'
import Signup from '../views/Login/Signup'
import Home from '../views/Home'
import Profile from '../views/Users/Profile'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

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
      if (token) {
        console.log('Fetching a new token!');
      // if (token !== '' && token !== 'undefined') {
      //   console.log('Fetching a new token!');
        this.props.authenticate();
      } else {
        this.props.authenticationFailure();
      }
  }
  // Goes on line 59 <Navbar isAuthenticated={isAuthenticated} logout={logout} />

  render() {
    const { currentUser, isAuthenticated, isAuthenticating, logout } = this.props;
    const authProps = { isAuthenticated, isAuthenticating, currentUser };
    return (
      <Router>
        <Grommet theme={ theme }>
          <Navbar isAuthenticated={isAuthenticated} logout={logout} />
          <Switch>
            <MatchAuthenticated path='/' exact component={ Home } {...authProps} />
            <MatchAuthenticated path='/profile' exact component={ Profile } {...authProps} />
            <RedirectUnauthenticated path='/login' exact component={ Login } { ...authProps } />
            <RedirectUnauthenticated path='/signup' exact component={ Signup } { ...authProps } />
          </Switch>
        </Grommet>
      </Router>
    );
  }

}
// <Route path='/' exact component={ Home } />


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
