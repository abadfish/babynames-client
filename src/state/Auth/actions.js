import AuthService from '../../services/AuthService'
import { API_URL } from '../../constants'
export const authenticationRequest = () => {
  return {
    type: 'AUTHENTICATION_REQUEST'
  }
}

export const setCurrentUser = user => {
  return {
    type: 'AUTHENTICATION_SUCCESS',
    user
  }
}

export const authenticationFailure = () => {
  return { type: 'AUTHENTICATION_FAILURE' };
}

export const logout = () => {
  localStorage.removeItem('token');
  return { type: 'LOGOUT' };
}

export const replaceUser = user => {
  return {
    type: 'REPLACE_USER',
    user
  }
}

export const headers = () => {
  const token = localStorage.getItem('token');
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer: ${token}`,
  }
}



export const signup = (user) => {
  return dispatch => {
    dispatch(authenticationRequest())
    AuthService.signup(user)
    .then(body => {
      console.log(body)
      console.log(body.token)
      console.log(body.user)
      localStorage.setItem('token', body.token);
      dispatch(setCurrentUser(body.user));
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const login = (user) => {
  return dispatch => {
    dispatch(authenticationRequest());
    AuthService.login(user)
      .then(body => {
        console.log(body)
        console.log(body.token)
        console.log(body.user)
        localStorage.setItem('token', body.token);
        dispatch(setCurrentUser(body.user))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const authenticate = () => {
  return dispatch => {
    dispatch(authenticationRequest());
      AuthService.authenticate()
      .then(body => {
        console.log(body)
        localStorage.setItem('token', body.token);
        dispatch(setCurrentUser(body.user))
      })
      .catch(err => {
        console.log(err)
        localStorage.removeItem('token');
        window.location = '/login';
      });
  }
}

export const updateNameRating = (user, name) => {
  return dispatch => {
    AuthService.updateRating(user, name)
    .then(user => {
      console.log(user)
      dispatch(replaceUser(user))
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export const createNameRating = (user, name) => {
  return dispatch => {
    AuthService.rate(user, name)
    .then(user => {
      console.log(user)
      dispatch(replaceUser(user))
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
