import React, { Component, PropTypes } from 'react';
import TodoTextInput from './TodoTextInput';

class Header extends Component {
  handleSave(text) {
      if (text.length !== 0) {
        // call action creator
        this.props.addTodo(text);
      }
  }

  render() {
    return (
      <header className='header'>
        <h1>Todos List</h1>
        <TodoTextInput
          newTodo={true}
          onSave={this.handleSave.bind(this)}
          placeholder='What needs to be done?'
        />
      </header>
    );
  }
}

// Enforce injected properties
Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header;
