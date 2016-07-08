import React from 'react';
import $ from 'jquery';
import Todo from './Todo';
import TodoList from './TodoList';
import TodoSummary from './TodoSummary';
import AddTodo from './AddTodo';
import DeleteTodo from './DeleteTodo';
import Container from './style/Container'
import Title from './style/Title'

const urlJSON = "https://whispering-reef-61715.herokuapp.com/todos/";

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    let self = this;

    $.getJSON(urlJSON, function(data) {
      self.setState({
        todos: data
      });
    });
  }

  handleTodoCreated(newTodo) {
    let self = this;

    $.ajax({
      type: "POST",
      url: urlJSON,
      data: JSON.stringify({
        todo: newTodo
      }),
      contentType: "application/json",
      dataType: "json"
    })
    .done(function(data) {
      self.setState({
        todos: self.state.todos.concat(data)
      });
    })
    .fail(function(error) {
      console.log(error);
    });

  }

  handleTodoDeleted() {
    let self = this;

    self.state.todos.map(function(todoItem){
      if(todoItem.completed){
        $.ajax({
          type: "DELETE",
          url: urlJSON + todoItem.id,
          data: JSON.stringify({
              todo: todoItem
          }),
          contentType: "application/json",
          dataType: "json"
        })
        .done(function(data) {
          self.setState({
            todos: self.state.todos.filter(function(todo){
              if (todo !== todoItem){
                return todo;
              }
            })
          });
        })
        .fail(function(error) {
          console.log(error);
        });
      }
    });
  }

  handleTodoChecked(todoChecked) {
    let self = this;

    $.ajax({
      type: "PUT",
      url: urlJSON + todoChecked.id,
      data: JSON.stringify({
          todo: todoChecked
      }),
      contentType: "application/json",
      dataType: "json"
    })
    .done(function(data) {
      self.setState({
        todos: self.state.todos.map(function(todo){
          if (todo === data){
            todo = data;
          }
          return todo;
        })
      });
    })
    .fail(function(error) {
      console.log(error);
    });

  }

  render() {
    return (
      <Container>
        <Title label="Todo List" />
        <AddTodo onTodoCreated={this.handleTodoCreated.bind(this)} />
        <DeleteTodo onTodoDeleted={this.handleTodoDeleted.bind(this)} />
        <TodoList todos={this.state.todos} onTodoChecked={this.handleTodoChecked.bind(this)} />
        <TodoSummary todos={this.state.todos} />
      </Container>
    );
  }
}

export default App;
