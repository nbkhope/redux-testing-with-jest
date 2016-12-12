import * as actions from '../../src/actions';
import * as types from '../../src/actions/types';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Do the laundry';

    const expectedAction = {
      type: types.ADD_TODO,
      text
    };

    expect(actions.addTodo(text)).toEqual(expectedAction);
  })
});
