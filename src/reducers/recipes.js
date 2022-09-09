import {
  SET_RECIPES_LIST,
} from '../actions/recipes';

export const initialState = {
  list: [],
  fetched: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_RECIPES_LIST:
      return {
        ...state,
        list: action.payload,
        fetched: true,
      };
    default:
      return state;
  }
};

export default reducer;
