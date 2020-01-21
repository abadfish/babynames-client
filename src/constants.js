export const API_URL = process.env.REACT_APP_API_URL

export const HEADERS = () => {
  const token = localStorage.getItem('userToken');
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer: ${token}`,
  }
}
