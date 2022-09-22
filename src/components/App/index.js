import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';

import Loading from 'src/components/App/Loading';
import MenuContainer from 'src/containers/Menu';
import HomeContainer from 'src/containers/Home';
import FavoritesContainer from 'src/containers/Favorites';
import RecipeContainer from 'src/containers/Recipe';
import Error from 'src/components/Error';

import './style.scss';

function App({ isLoaded }) {
  if (!isLoaded) {
    return <Loading />;
  }
  return (
    <div className="app">
      <MenuContainer />
      <Routes>
        <Route
          path="/"
          element={(
            <HomeContainer />
          )}
        />
        <Route
          path="/favorites"
          element={(
            <FavoritesContainer />
          )}
        />
        <Route
          path="/recipe/:slug"
          element={(
            <RecipeContainer />
          )}
        />
        <Route
          path="*"
          element={(
            <Error />
          )}
        />
      </Routes>
    </div>
  );
}

App.propTypes = {
  isLoaded: PropTypes.bool,
};

App.defaultProps = {
  isLoaded: false,
};

export default App;
