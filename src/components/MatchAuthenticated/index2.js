// @flow
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

type Props = {
  // cableApp: cableApp,
  path: string,
  exactly?: any,
  component: any,
  isAuthenticated: boolean,
  isAuthenticating: boolean,
}

const MatchAuthenticated = ({
  props,
  path,
  exactly,
  isAuthenticated,
  isAuthenticating,
  component: Component,
}: Props) => {
  console.log('props are ' + props)
  return(
    <Route
      exactly={exactly}
      path={path}
      render={(props) => {
        if (isAuthenticated) { return <Component {...props} />; }
        if (isAuthenticating) { return null; }
        if (!isAuthenticating && !isAuthenticated) { return <Redirect to={{ pathname: '/login' }} />; }
        return null;
      }}
    />

  )
}

export default MatchAuthenticated;
