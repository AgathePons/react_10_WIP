import { SUBMIT_LOGIN } from '../actions/user';
import { requestLogin } from '../requests/loginRequests';

const loginMiddleware = (store) => (next) => async (action) => {
  if (action.type === SUBMIT_LOGIN) {
    const state = store.getState();
    const { email, password } = state.user;
    const response = await requestLogin(email, password);
    console.log(response);
    switch (response.status) {
      case 200:
        break;
      case 401:
      default:
        break;
    }
  }
  const result = next(action);
  return result;
};

export default loginMiddleware;
