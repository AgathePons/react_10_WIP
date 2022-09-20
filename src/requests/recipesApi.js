import api from './api';

export const requestRecipes = async () => {
  try {
    const response = await api.get('/recipes');
    console.log(response);
    return response;
  }
  catch (err) {
    return err.response;
  }
};

export const requestFavorites = async () => {
  try {
    // no need to set the token at each request, because it is set in the middleware
    // thanks to Axios (see api.js saveAuthorizationToken function)
    const response = await api.get('/favorites');
    return response;
  }
  catch (err) {
    return err.response;
  }
};
