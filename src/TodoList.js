import React from 'react';
import Todo from './Todo';
import List from './Style/List';

class TodoList extends React.Component {

  renderTodo(todo){
    return <Todo
      key={todo.id}
      todo={todo}
      onTodoChecked={this.props.onTodoChecked}
      />;
  }

  render() {
    return (
      <List>
        {this.props.todos.map(this.renderTodo.bind(this))}
      </List>
    );
  }
}

export default TodoList;
