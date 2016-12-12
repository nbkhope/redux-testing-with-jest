import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../src/components/Header';

// we make a setup() helper that passes the stubbed callbacks as props
// and renders the component with shallow rendering
// (This lets individual tests assert on whether the callbacks
// were called when expected)

function setup() {
  const props = {
    addTodo: jest.fn()
  };

  const enzymeWrapper = shallow(<Header {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('components', () => {
  describe('Header', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.find('header').hasClass('header')).toBe(true);

      expect(enzymeWrapper.find('h1').text()).toBe('Todos List');

      const todoInputProps = enzymeWrapper.find('TodoTextInput').props();

      expect(todoInputProps.newTodo).toBe(true)
      expect(todoInputProps.placeholder).toEqual('What needs to be done?');
    });

    it('should call addTodo if length of text is greater than zero', () => {
      const { enzymeWrapper, props } = setup();

      const input = enzymeWrapper.find('TodoTextInput');

      input.props().onSave('');
      expect(props.addTodo.mock.calls.length).toBe(0);

      input.props().onSave('Do the dishes');
      expect(props.addTodo.mock.calls.length).toBe(1);
    });
  });
});
