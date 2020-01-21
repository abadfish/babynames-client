import { API_URL, HEADERS } from '../constants'

export const headers = () => {
  const token = localStorage.getItem('token');
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer: ${token}`,
  }
}

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
        headers: HEADERS,
      })
      .then(response => response.json())
  },

}

export default AuthService
