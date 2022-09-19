import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

import reducer from 'src/reducers';
import recipesMiddleware from '../middlewares/recipesMiddleware';
import loginMiddleware from '../middlewares/loginMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(recipesMiddleware, loginMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
