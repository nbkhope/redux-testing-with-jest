import axios from 'axios';
import fetch from 'isomorphic-fetch';

import {
  ADD_TODO,
  FETCH_TODOS_SUCCESS
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

function fetchTodosSuccess(body) {
  return {
    type: FETCH_TODOS_SUCCESS,
    body
  };
}

export function fetchTodos() {
  return dispatch => {
    // return axios.get(`${ROOT_URL}/todos`)
    //   .then((todos) => {
    //     return dispatch(fetchTodosSuccess(todos))
    //   });
    return fetch(`${ROOT_URL}/todos`)
      .then(res => res.json())
      .then(json => dispatch(fetchTodosSuccess(json.body)));
  };
}
