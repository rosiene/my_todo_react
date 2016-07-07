import React from 'react';

const button = {
  backgroundColor: "#fff",
  padding: "6px 12px",
  margin: "10px",
  fontSize: "14px",
  textAlign: "center",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  touchAction: "manipulation",
  cursor: "pointer",
  border: "1px solid #ccc",
  borderRadius: "4px"
}

class Button extends React.Component {
  render() {
    return (
      <button style={ button }  type={this.props.type}>{this.props.label}</button>
    );
  }
}

export default Button;
