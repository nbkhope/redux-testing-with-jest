import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import expect from 'expect';

import * as actions from '../../src/actions';
import * as types from '../../src/actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const ROOT_URL = 'http://localhost:3090';

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    // issue: nock does not work with axios
    nock(`${ROOT_URL}`)
      .get('/todos')
      .reply(200, { body: { todos: ['do something'] } })
      ;

    const expectedActions = [
      {
        type: types.FETCH_TODOS_SUCCESS,
        body: {
          todos: ['do something']
        }
      }
    ];

    const store = mockStore({
      todos: []
    });

    return store.dispatch(actions.fetchTodos())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
