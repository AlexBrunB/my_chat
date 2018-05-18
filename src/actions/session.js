import { reset } from 'redux-form';
import api from '../api';
import { fetchUserRooms } from './rooms';
import { Socket } from 'phoenix';

const API_URL = 'http://localhost:3000/';
const WEBSOCKET_URL = 'ws://localhost:3000/';

function connectToSocket(dispatch) {
  const token = JSON.parse(localStorage.getItem('token'));
  const socket = new Socket(`${WEBSOCKET_URL}/socket`, {
    params: { token },
    logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data); }
  });
  socket.connect();
  dispatch({ type: 'SOCKET_CONNECTED', socket });
}

function setCurrentUser(dispatch, response) {
  console.log(JSON.stringify(response));
  localStorage.setItem('token', response.data.date);
  dispatch({ type: 'AUTHENTICATION_SUCCESS', response });
  dispatch(fetchUserRooms(response.data.id));
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
  