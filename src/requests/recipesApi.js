import axios from 'axios';

const serverAxios = axios.create({
  baseURL: 'http://localhost:3001',
});

serverAxios.interceptors.response.use((response) => {
  console.log('Event triggered at each request with serverAxios.interceptors.response.use()');
  return response;
});

const requestRecipes = async () => {
  try {
    const response = await serverAxios.get('/recipes');
    console.log(response);
    return response;
  }
  catch (err) {
    return err.response;
  }
};
export default requestRecipes;
