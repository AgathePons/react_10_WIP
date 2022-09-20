import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

api.interceptors.response.use((response) => {
  console.log('Event triggered at each request with serverAxios.interceptors.response.use()');
  return response;
});

export function saveAuthorizationToken(token) {
  // add the token in the Authorization Headers by default
  console.log('token:', token);
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function removeAuthorizationToken() {
  // remove the token from the Authorization Headers
  api.defaults.headers.common.Authorization = '';
}

export default api;
