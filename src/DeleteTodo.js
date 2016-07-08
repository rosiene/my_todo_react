import React from 'react';
import Button from './style/Button'

const form = {
  textAlign: "right"
}

class DeleteTodo extends React.Component {

  deleteTodo(event){
    event.preventDefault();
    this.props.onTodoDeleted();
  }

  render() {
    return (
      <form style={form} onSubmit={this.deleteTodo.bind(this)}>
        <Button type="submit" label="Clean up" />
      </form>
    );
  }
}

export default DeleteTodo;
