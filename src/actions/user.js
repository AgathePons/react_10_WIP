export const UPDATE_LOGIN_VALUE = 'UPDATE_LOGIN_VALUE';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SET_PSEUDO = 'SET_PSEUDO';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const ERROR_LOGIN = 'ERROR_LOGIN';

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

/**
 * action to set the pseudo
 * @param {String} pseudo the pseudo returned from the back
 * @returns {Action}
 */
export function actionSetPseudo(pseudo) {
  return {
    type: SET_PSEUDO,
    payload: pseudo,
  };
}

/**
 * action to set logged to true and set the token
 * @param {String} token the token returned from the back
 * @returns {Action}
 */
export function actionLogin(token) {
  return {
    type: LOGIN,
    payload: token,
  };
}

/**
 * action to logout the user, reset the state, set logged to false,
 * empty pseudo, email, password and token
 * @returns {Action}
 */
export function actionLogout() {
  return {
    type: LOGOUT,
  };
}

/**
 * action in case of error login. Logout and empty the password
 * @param {String} error error message
 * @returns {Action}
 */
export function actionErrorLogin(error) {
  return {
    type: ERROR_LOGIN,
    payload: error,
  };
}
