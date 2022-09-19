export const UPDATE_LOGIN_VALUE = 'UPDATE_LOGIN_VALUE';

/**
 * action to change the value of a field (email or password)
 * @param {String} value of the login input
 * @param {String} name of the key to modify
 * @returns {Action}
 */
export function actionUpdateLoginValue(value, name) {
  return {
    type: UPDATE_LOGIN_VALUE,
    payload: { value, name },
  };
}
