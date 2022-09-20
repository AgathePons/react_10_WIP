import axios from 'axios';

const serverInstance = axios.create({
  baseURL: 'http://localhost:3001',
});

serverInstance.interceptors.response.use((response) => {
  console.log('Event triggered at each request with serverAxios.interceptors.response.use()');
  return response;
});

export default serverInstance;
