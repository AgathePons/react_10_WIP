import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserEmail,
  selectUserPassword,
  selectUserLogged,
  selectUserPseudo,
  selectUserErrorMessage,
} from 'src/selectors/user';
import { actionUpdateLoginValue, actionSubmitLogin, actionLogout } from 'src/actions/user';

import LoginForm from 'src/components/LoginForm';

function LoginFormContainer() {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);
  const password = useSelector(selectUserPassword);
  const logged = useSelector(selectUserLogged);
  const pseudo = useSelector(selectUserPseudo);
  const errorMessage = useSelector(selectUserErrorMessage);

  const handleChange = (value, name) => {
    dispatch(actionUpdateLoginValue(value, name));
  };

  const handleLogin = () => {
    dispatch(actionSubmitLogin());
  };

  const handleLogout = () => {
    dispatch(actionLogout());
  };

  return (
    <LoginForm
      email={email}
      password={password}
      changeField={handleChange}
      handleLogin={handleLogin}
      handleLogout={handleLogout}
      isLogged={logged}
      loggedMessage={`Bienvenu ${pseudo} !`}
      errorMessage={errorMessage}
    />
  );
}

export default LoginFormContainer;
