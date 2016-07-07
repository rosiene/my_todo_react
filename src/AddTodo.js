import React from 'react';
import jQuery from 'jquery';
import Form from './style/Form';
import TextField from './style/TextField';
import Button from './style/Button';

const textField = {
  fontSize: "12px",
  marginLeft: "10px",
  padding: "6px 12px",
  color: "#555",
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: "4px"
}

class AddTodo extends React.Component {

  createTodo(event){
    event.preventDefault();

    let self = this;
    let newTodo = {
      id: null,
      description: this.refs.newtodo.value,
      completed: false
    };

    jQuery.ajax({
      type: "POST",
      url: "http://localhost:3001/todos",
      data: JSON.stringify({
        todo: newTodo
      }),
      contentType: "application/json",
      dataType: "json"
    })

    .done(function(data) {
      self.props.onTodoCreated(data);
      self.refs.newtodo.value = "";
    })

    .fail(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
      <Form onSubmit={this.createTodo.bind(this)}>
        <label>Todo:</label>
        <input style={textField} ref="newtodo" />
        <Button type="submit" label="Create" />
      </Form>
    );
  }
}

export default AddTodo;
