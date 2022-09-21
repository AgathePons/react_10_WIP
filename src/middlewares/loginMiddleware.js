import {
  SUBMIT_LOGIN,
  actionSetPseudo,
  actionLogin,
  actionErrorLogin,
  LOGOUT,
} from '../actions/user';
import { saveAuthorizationToken, removeAuthorizationToken } from '../requests/api';
import { requestLogin } from '../requests/loginRequests';
import { requestFavorites } from '../requests/recipesApi';

async function onSubmitLogin(store) {
  const state = store.getState();
  const { email, password } = state.user;
  const response = await requestLogin(email, password);
  let responseFavorites;
  console.log(response);
  switch (response.status) {
    case 200:
      // login
      store.dispatch(
        actionLogin(),
      );
      // pseudo
      store.dispatch(
        actionSetPseudo(response.data.pseudo),
      );
      // save token in headers
      saveAuthorizationToken(response.data.token);
      // get favorites
      responseFavorites = await requestFavorites();
      console.log(responseFavorites);
      break;
    case 401:
    default:
      store.dispatch(
        actionErrorLogin('Mot de passe ou email incorrect !'),
      );
      removeAuthorizationToken();
      break;
  }
}

async function onLogout() {
  removeAuthorizationToken();
}

const loginMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      await onSubmitLogin(store);
      // We do not send SUBMIT_LOGIN to the reducers so return
      return null;
    case LOGOUT:
      onLogout();
      // no return to let the action go to the reducers
      break;
    default:
  }
  const result = next(action);
  return result;
};

export default loginMiddleware;
