import {
  SET_RECIPES_LIST,
  SET_RECIPES_FAVORITES,
} from '../actions/recipes';
import { LOGOUT } from '../actions/user';

export const initialState = {
  list: [],
  fetched: false,
  favorites: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_RECIPES_LIST:
      return {
        ...state,
        list: action.payload,
        fetched: true,
      };
    case SET_RECIPES_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        favorites: [],
      };
    default:
      return state;
  }
};

export default reducer;
