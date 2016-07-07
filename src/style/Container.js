import React from 'react';

const container = {
  fontFamily: "'Noto Sans', sans-serif",
  width: 600,
  margin: "20px auto",
  border: 'solid 1px #eee',
  padding: '20px',
  borderRadius: '10px',
  backgroundColor: '#fff'
}

class Container extends React.Component {
  render() {
    return (
      <div style={ container }>
        {this.props.children}
      </div>
    );
  }
}

export default Container;
