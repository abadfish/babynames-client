// @flow
import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const MatchAuthenticated = (props) => {
  // console.log(props)
  const Component = props.component
  return(
    <Route
      currentUser={props.currentUser}
      path={props.path}
      cableApp={props.cableApp}
      render={() => {
        if (props.isAuthenticated) { return <Component cableApp={props.cableApp} currentUser={props.currentUser} />; }
        if (props.isAuthenticating) { return null; }
        if (!props.isAuthenticating && !props.isAuthenticated) { return <Redirect to={{ pathname: '/login' }} />; }
        return null;
      }}
    />

  )
}

export default MatchAuthenticated;
