import React from 'react';
import jQuery from 'jquery';
import Todo from './Todo';
import TodoList from './TodoList';
import TodoSummary from './TodoSummary';
import AddTodo from './AddTodo';
import Container from './style/Container'
import Title from './style/Title'

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    let self = this;

    jQuery.getJSON("http://localhost:3001/todos", function(data) {
      self.setState({
        todos: data
      });
    });
  }

  handleTodoCreated(newTodo) {
    this.setState({
      todos: this.state.todos.concat(newTodo)
    })
  }

  render() {
    return (
      <Container>
        <Title label="Todo List" />
        <AddTodo onTodoCreated={this.handleTodoCreated.bind(this)} />
        <TodoList todos={this.state.todos} />
        <TodoSummary todos={this.state.todos} />
      </Container>
    );
  }
}

export default App;
