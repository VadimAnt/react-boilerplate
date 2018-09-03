import axios from 'axios';
const domain = 'https://reqres.in';
const actions = require('./actions');

export const signIn = signInData => {
  return dispatch => {
    dispatch(actions.requestSignInPending());
    return axios({
      method: 'POST',
      url: `${domain}/api/login`,
      headers: {
        'content-type': 'application/json',
      },
      data: JSON.stringify(signInData),
    })
      .then(responce => {
        localStorage.setItem('token', responce.data.token);
        dispatch(actions.requestSignInSuccess(responce.data));
      })
      .catch(error => {
        dispatch(actions.requestSignInRejected(error.response.data));
      });
  };
};

export const signUp = signUpData => {
  return dispatch => {
    dispatch(actions.requestSignUpPending());
    return axios({
      method: 'POST',
      url: `${domain}/api/register`,
      headers: {
        'content-type': 'application/json',
      },
      data: JSON.stringify(signUpData),
    })
      .then(responce => {
        dispatch(actions.requestSignUpSuccess(responce.data));
      })
      .catch(error => {
        dispatch(actions.requestSignUpRejected(error.response.data));
      });
  };
};
