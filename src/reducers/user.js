import { UPDATE_LOGIN_VALUE } from 'src/actions/user';

export const initialState = {
  email: 'bouclierman@herocorp.io',
  password: 'jennifer',
  logged: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_LOGIN_VALUE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};

export default reducer;
