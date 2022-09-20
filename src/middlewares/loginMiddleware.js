import {
  SUBMIT_LOGIN,
  actionSetPseudo,
  actionLogin,
  actionErrorLogin,
} from '../actions/user';
import { requestLogin } from '../requests/loginRequests';

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
        break;
      case 401:
      default:
        store.dispatch(
          actionErrorLogin('Mot de passe ou email incorrect !'),
        );
        break;
    }
  }
  const result = next(action);
  return result;
};

export default loginMiddleware;
