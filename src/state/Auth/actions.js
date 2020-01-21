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

export const logout = (routerHistory) => {
  localStorage.removeItem('token');
  routerHistory.replace('./login');
  return { type: 'LOGOUT' };
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
      // const slug = body.user.email.split("@")[0];
      console.log(body)
      console.log(body.token)
      console.log(body.user)
      localStorage.setItem('token', body.token);
      dispatch(setCurrentUser(body.user));
      // router.history.replace(`/users/${slug}/profile`);
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const login = (user, router) => {
  console.log(user)
  return dispatch => {
    dispatch(authenticationRequest());
    AuthService.login(user)
      .then(body => {
        console.log(body)
        console.log(body.token)
        console.log(body.user)
        localStorage.setItem('token', body.token);
        // localStorage.setItem('user', body.user);
        dispatch(setCurrentUser(body.user))
        // router.history.replace('/products');
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const authenticate = (token) => {
  return dispatch => {
    dispatch(authenticationRequest());
      AuthService.authenticate(token)
      .then(response => {
        console.log(response)
        localStorage.setItem('token', response.token);
        // localStorage.setItem('user', response.user);
        dispatch(setCurrentUser(response.user))
      })
      .catch(err => {
        console.log(err)
        localStorage.removeItem('token');
        window.location = '/login';
      });
  }
}
