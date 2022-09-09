import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';
import Loading from './Loading';

import { actionRequestRecipesList } from '../../actions/recipes';

import './style.scss';

function App({ loading }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionRequestRecipesList());
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route
          path="/"
          element={(
            <Home />
          )}
        />
        <Route
          path="/recipe/:slug"
          element={(
            <Recipe />
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
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
