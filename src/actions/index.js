import axios from 'axios';

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

export function fetchTodos() {
  return dispatch => {
    return axios.get(`${ROOT_URL}/todos`)
      .then((todos) => {
        return dispatch({
          type: FETCH_TODOS_SUCCESS,
          body: todos
        })
      });
  };
}
