import { reset } from 'redux-form';
import api from '../api';

function setCurrentUser(dispatch, response) {
  console.log(JSON.stringify(response));
  localStorage.setItem('token', response.data.date);
  dispatch({ type: 'AUTHENTICATION_SUCCESS', response });
}

export function login(data, router) {
  return dispatch => api.post('signin', data)
    .then((response) => {
      setCurrentUser(dispatch, response);
      dispatch(reset('login'));
    });
}

export function signup(data, router) {
  return dispatch => api.post('signup', data)
    .then((response) => {
      setCurrentUser(dispatch, response);
      dispatch(reset('signup'));
    });
}

export function logout(router) {
  return dispatch => api.fetch('admin')
    .then(() => {
      localStorage.removeItem('token');
      dispatch({ type: 'LOGOUT' });
    });
}

export function authenticate() {
    return (dispatch) => {
      dispatch({ type: 'AUTHENTICATION_REQUEST' });
      return api.post('/signin')
        .then((response) => {
          setCurrentUser(dispatch, response);
        })
        .catch(() => {
          localStorage.removeItem('token');
          window.location = '/login';
        });
    };
  }
  
  export const unauthenticate = () => ({ type: 'AUTHENTICATION_FAILURE' });
  