import { requestRecipes, requestFavorites } from '../requests/recipesApi';
import {
  REQUEST_RECIPES_LIST,
  REQUEST_RECIPES_FAVORITES,
  actionSetRecipesList,
  actionSetRecipesFavorites,
} from '../actions/recipes';

async function onRequestRecipesList(store) {
  const response = await requestRecipes();
  switch (response.status) {
    case 200:
      store.dispatch(
        actionSetRecipesList(response.data),
      );
      break;
    case 500:
    default:
      break;
  }
}

async function onRequestRecipesFavorites(store) {
  const response = await requestFavorites();
  switch (response.status) {
    case 200:
      store.dispatch(
        actionSetRecipesFavorites(response.data.favorites),
      );
      break;
    case 500:
    default:
      break;
  }
}

const recipesMiddleware = (store) => (next) => async (action) => {
  console.log('logger action >>', action.type);
  switch (action.type) {
    case REQUEST_RECIPES_LIST:
      await onRequestRecipesList(store, action);
      return null;
    case REQUEST_RECIPES_FAVORITES:
      // get favorites
      onRequestRecipesFavorites(store);
      return null;
    default:
  }
  const result = next(action);
  return result;
};

export default recipesMiddleware;
