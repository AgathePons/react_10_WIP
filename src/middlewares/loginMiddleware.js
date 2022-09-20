import {
  SUBMIT_LOGIN,
  actionSetPseudo,
  actionLogin,
  actionErrorLogin,
} from '../actions/user';
import { requestLogin } from '../requests/loginRequests';
import { requestFavorites } from '../requests/recipesApi';

const loginMiddleware = (store) => (next) => async (action) => {
  if (action.type === SUBMIT_LOGIN) {
    const state = store.getState();
    const { email, password } = state.user;
    const response = await requestLogin(email, password);
    console.log(response);
    switch (response.status) {
      case 200:
        store.dispatch(
          actionLogin(response.data.token),
        );
        store.dispatch(
          actionSetPseudo(response.data.pseudo),
        );
        const responseFavorites = await requestFavorites(response.data.token);
        console.log(responseFavorites);
        break;
      case 401:
      default:
        store.dispatch(
          actionErrorLogin('Mot de passe ou email incorrect !'),
        );
        break;
    }
    // We do not send SUBMIT_LOGIN to the reducers so return
    return null;
  }
  const result = next(action);
  return result;
};

export default loginMiddleware;
