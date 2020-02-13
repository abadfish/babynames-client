import { API_URL, HEADERS } from '../constants'


const AuthService = {

  signup(user) {
    return fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: HEADERS(),
      body: JSON.stringify({ user })
    })
    .then(response => response.json())
  },

  login(user) {
    return fetch(`${API_URL}/auth`, {
      method: 'POST',
      headers: HEADERS(),
      body: JSON.stringify({ user })
    })
      .then(response => response.json())
  },

  authenticate() {
    return fetch(`${API_URL}/auth/refresh`, {
        method: 'POST',
        headers: HEADERS(),
      })
      .then(response => response.json())
  },

  rate(user, name) {
    return fetch(`${API_URL}/users/${user.id}/user_name_votes`, {
      method: 'POST',
      headers: HEADERS(),
      body: JSON.stringify({ name })
    })
    .then(response => response.json())
  },

  updateRating(user, name) {
    return fetch(`${API_URL}/users/${user.id}/user_name_votes/${name.id}`, {
      method: 'PUT',
      headers: HEADERS(),
      body: JSON.stringify({ user, name })
    })
    .then(response => response.json())
  },


}

export default AuthService


// MOVED TO CONSTANTS.JS
// export const headers = () => {
//   const token = localStorage.getItem('token');
//   console.log(token)
//   return {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer: ${token}`,
//   }
// }
