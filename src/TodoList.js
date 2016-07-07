import React from 'react';
import Todo from './Todo';
import List from './Style/List';

class TodoList extends React.Component {

  renderTodo(todo){
    return <Todo
      key={todo.id}
      description={todo.description}
      completed={todo.completed}
      />;
  }

  render() {
    return (
      <List>
        {this.props.todos.map(this.renderTodo)}
      </List>
    );
  }
}

export default TodoList;
