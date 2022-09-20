import serverInstance from './serverInstance';

export const requestRecipes = async () => {
  try {
    const response = await serverInstance.get('/recipes');
    console.log(response);
    return response;
  }
  catch (err) {
    return err.response;
  }
};

export const requestFavorites = async (token) => {
  try {
    const response = await serverInstance.get('/favorites', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response;
  }
  catch (err) {
    return err.response;
  }
};
