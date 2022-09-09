export const REQUEST_RECIPES_LIST = 'REQUEST_RECIPES_LIST';
export const SET_RECIPES_LIST = 'SET_RECIPES_LIST';

/**
 * Action to request the list of recipes
 * @returns {Action}
 */
export function actionRequestRecipesList() {
  return { type: REQUEST_RECIPES_LIST };
}
/**
 * Action to set or modify the list of recipes
 * @param {Array.<{
 *  id: Number,
 *  title: String,
 *  slug: String,
 *  thumbnail: String,
 *  author: String,
 *  difficulty: String,
 *  description: String,
 *  ingredients: Object[]
 *  instructions: Object[]
 * }>} recipes list of recipes
 * @returns {Action}
 */
export function actionSetRecipesList(recipes) {
  return { type: SET_RECIPES_LIST, payload: recipes };
}
