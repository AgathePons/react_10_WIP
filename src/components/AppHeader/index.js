import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail, selectUserPassword } from 'src/selectors/user';
import { actionUpdateLoginValue } from 'src/actions/user';
import './style.scss';
import logo from '../../assets/logo.png';
import LoginForm from '../LoginForm';

function AppHeader() {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);
  const password = useSelector(selectUserPassword);
  const handleChange = (value, name) => {
    dispatch(actionUpdateLoginValue(value, name));
  };

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm
        email={email}
        password={password}
        changeField={handleChange}
      />
    </header>
  );
}

export default AppHeader;
