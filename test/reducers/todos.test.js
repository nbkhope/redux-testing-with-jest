import todosReducer from '../../src/reducers/todos';
import * as types from '../../src/actions/types';

describe('Todos Reducer', () => {
  it('should return the initial state', () => {
    expect(todosReducer(undefined, {}))
      .toEqual([
        {
          id: 1,
          text: 'Wash the dishes',
          completed: false
        }
      ]);
  });

  it('should handle ADD_TODO', () => {
    expect(todosReducer([], {
      type: types.ADD_TODO,
      text: 'Say hello'
    }))
      .toEqual([
        {
          id: 1,
          text: 'Say hello',
          completed: false
        }
      ]);

    const INITIAL_STATE = [
      {
        id: 1,
        text: 'Do the laundry',
        completed: false
      }
    ];

    const theAction = {
      type: types.ADD_TODO,
      text: 'Run the tests'
    }

    expect(todosReducer(INITIAL_STATE, theAction))
      .toEqual([
        {
          id: 1,
          text: 'Do the laundry',
          completed: false
        },
        {
          id: 2,
          text: 'Run the tests',
          completed: false
        }
      ])
  });
});
