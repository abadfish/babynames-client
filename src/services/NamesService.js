import { API_URL, HEADERS } from '../constants'

const NamesService = {

  fetchNames(baby) {
    return fetch(`${API_URL}/babies/${baby.id}/names`)
    .then(response => response.json())
  },

  createName(baby, name) {
    return fetch(`${API_URL}/babies/${baby.id}/names`, {
      method: 'POST',
      headers: HEADERS(),
      body: JSON.stringify({ name })
    })
    .then(response => response.json())
  },

  updateName(baby, name) {
    return fetch(`${API_URL}/babies/${baby.id}/names`, {
      method: 'PUT',
      headers: HEADERS(),
      body: JSON.stringify({ name })
    })
    .then(response => response.json())
  }
}

export default NamesService
