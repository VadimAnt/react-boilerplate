import types from './types';

export const requestSignInPending = () => {
  return {
    type: types.REQUEST_SIGIN_PENDING,
  };
};

export const requestSignInRejected = payload => {
  return {
    type: types.REQUEST_SIGIN_REJECTED,
    payload: payload,
  };
};

export const requestSignInSuccess = payload => {
  return {
    type: types.REQUEST_SIGIN_SUCCESS,
    payload: payload,
  };
};

export const requestSignUpPending = () => {
  return {
    type: types.REQUEST_SIGNUP_PENDING,
  };
};

export const requestSignUpRejected = payload => {
  return {
    type: types.REQUEST_SIGIN_REJECTED,
    payload: payload,
  };
};

export const requestSignUpSuccess = payload => {
  return {
    type: types.REQUEST_SIGNUP_SUCCESS,
    payload: payload,
  };
};

export default {
  requestSignInPending,
  requestSignInRejected,
  requestSignInSuccess,
};
