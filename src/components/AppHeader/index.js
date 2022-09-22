import './style.scss';
import logo from '../../assets/logo.png';
import LoginFormContainer from '../../containers/LoginForm';

function AppHeader(
  email,
  password,
  handleChange,
  handleLogin,
  handleLogout,
  logged,
  pseudo,
  errorMessage,
) {
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginFormContainer
        email={email}
        password={password}
        changeField={handleChange}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        isLogged={logged}
        loggedMessage={`Bienvenu ${pseudo} !`}
        errorMessage={errorMessage}
      />
    </header>
  );
}

export default AppHeader;
