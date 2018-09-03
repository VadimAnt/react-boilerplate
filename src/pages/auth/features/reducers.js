import types from './types';

const INITIAL_STATE = {
  isRequestSignIn: false,
  isRequestSignUp: false,
  isRequestLggout: false,
  isAuthenticated: false,
  user: {},
  token: '',
  error: {},
};

const authReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case types.REQUEST_SIGIN_PENDING:
      return {
        ...state,
        isRequestSignIn: true,
      };
    case types.REQUEST_SIGIN_REJECTED:
      return {
        ...state,
        isRequestSignIn: false,
        error: actions.payload,
      };
    case types.REQUEST_SIGIN_SUCCESS:
      return {
        ...state,
        isRequestSignIn: false,
        isAuthenticated: true,
        user: actions.payload.user,
        token: actions.payload.token,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default authReducer;
