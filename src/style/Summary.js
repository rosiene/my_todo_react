import React from 'react';

const summary = {
  padding: "10px",
  textAlign: "center",
  fontSize: "18px"
}

class Summary extends React.Component {
  render() {
    return (
      <div style={ summary }>
        {this.props.children}
      </div>
    );
  }
}

export default Summary;
