import React from 'react';

const textField = {
  fontSize: "12px",
  marginLeft: "10px",
  padding: "6px 12px",
  color: "#555",
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: "4px"
}

class TextField extends React.Component {
  render() {
    return (
      <input style={ textField } ref={this.props.ref} />
    );
  }
}

export default TextField;
