import React from 'react';
import Button from './style/Button';

const form = {
  float: "left"
}

const textField = {
  fontSize: "14px",
  marginLeft: "10px",
  padding: "6px 12px",
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: "4px"
}

class AddTodo extends React.Component {

  createTodo(event){
    event.preventDefault();

    let newTodo = {
      id: null,
      description: this.refs.newtodo.value,
      completed: false
    };
    this.props.onTodoCreated(newTodo);
    this.refs.newtodo.value = "";
  }

  render() {
    return (
      <form style={form} onSubmit={this.createTodo.bind(this)}>
        <label>Todo:</label>
        <input style={textField} ref="newtodo" />
        <Button type="submit" label="Create" />
      </form>
    );
  }
}

export default AddTodo;
