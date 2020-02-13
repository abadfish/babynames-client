import { API_URL, HEADERS } from '../constants'

const BabiesService = {

  fetchBaby(babyId) {
    return fetch(`${API_URL}/babies/${babyId}`)
    .then(response => response.json())
  },

  fetchName(babyId, nameId) {
    return fetch(`${API_URL}/babies/${babyId}/babies_names/${nameId}`)
    .then(response => response.json())
  },

  createName(name, babyId) {
    return fetch(`${API_URL}/babies/${babyId}/babies_names`, {
      method: 'POST',
      headers: HEADERS(),
      body: JSON.stringify({ name })
    })
    .then(response => response.json())
  },

  updateName(babyId, name) {
    return fetch(`${API_URL}/babies/${babyId}/babies_names/${name.id}`, {
      method: 'PUT',
      headers: HEADERS(),
      body: JSON.stringify({ name })
    })
    .then(response => response.json())
  },

  updateBaby(baby, name) {
    return fetch(`${API_URL}/babies/${baby.id}/babies_names`, {
      method: 'PUT',
      headers: HEADERS(),
      body: JSON.stringify({ name })
    })
    .then(response => response.json())
  }
}

export default BabiesService
