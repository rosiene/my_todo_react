import React from 'react';

const form = {
}

class Form extends React.Component {
  render() {
    return (
      <form style={ form } onSubmit={this.props.onSubmit}>
        {this.props.children}
      </form>
    );
  }
}

export default Form;
