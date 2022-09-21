import {
  UPDATE_LOGIN_VALUE,
  SET_PSEUDO,
  LOGIN,
  LOGOUT,
  ERROR_LOGIN,
} from 'src/actions/user';

export const initialState = {
  email: 'bouclierman@herocorp.io',
  password: 'jennifer',
  logged: false,
  pseudo: '',
  errorMessage: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_LOGIN_VALUE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case SET_PSEUDO:
      return {
        ...state,
        pseudo: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        token: action.payload,
        logged: true,
        password: '',
        errorMessage: '',
      };
    case LOGOUT:
      return {
        ...state,
        logged: false,
        pseudo: null,
        email: '',
        password: '',
        errorMessage: '',
      };
    case ERROR_LOGIN:
      return {
        ...state,
        password: '',
        logged: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
