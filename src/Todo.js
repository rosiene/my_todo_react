import React from 'react';
import ListItem from './Style/ListItem';

class Todo extends React.Component {

  checkCompleted() {
    let todo = this.props.todo;
    todo.completed = !todo.completed;
    this.props.onTodoChecked(todo);
  }

  render() {
    var checked = "";
    if (this.props.todo.completed){
      checked = "checked";
    }

    return (
      <ListItem checked={this.props.todo.completed}>
        <input type="checkbox" onChange={this.checkCompleted.bind(this)} checked={checked} />
        {this.props.todo.description}
      </ListItem>
    );
  }
}

export default Todo;
