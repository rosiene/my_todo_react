import React from 'react';
import ListItem from './Style/ListItem';

class Todo extends React.Component {

  render() {
    return (
      <ListItem>
        <input type="checkbox" checked={this.props.completed} />
        {this.props.description}
      </ListItem>
    );
  }
}

export default Todo;
