export const UPDATE_LOGIN_VALUE = 'UPDATE_LOGIN_VALUE';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

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

/**
 * action to trigger the login request in the login middleware
 * @returns {Action}
 */
export function actionSubmitLogin() {
  return {
    type: SUBMIT_LOGIN,
  };
}
