import React from 'react';
import Summary from './style/Summary';

class TodoSummary extends React.Component {

  countTodo(){
    return this.props.todos.filter(function(todo){ return !todo.completed }).length;
  }

  countDone(){
    return this.props.todos.filter(function(todo){ return todo.completed }).length;
  }

  countTotal(){
    return this.props.todos.length;
  }

  render() {
    return (
      <Summary>
        Todo: {this.countTodo()} • Done: {this.countDone()} • Total: {this.countTotal()}
      </Summary>
    );
  }
}

export default TodoSummary;
