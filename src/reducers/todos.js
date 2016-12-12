import {
  ADD_TODO
} from '../actions/types';

const INITIAL_STATE = [
  {
    id: 1,
    text: 'Wash the dishes',
    completed: false
  }
];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TODO:
      return [ ...state, { id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), 0) + 1, completed: false, text: action.text }]
    default:
      return state;
  }
};
