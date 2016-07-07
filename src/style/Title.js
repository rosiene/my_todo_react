import React from 'react';

const title = {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: '4rem',
    borderBottom: '6px solid #444',
    marginBottom: '20px',
    color: '#444'
  };

class Title extends React.Component {
  render() {
    return (
      <div style={ title }>
        {this.props.label}
      </div>
    );
  }
}

export default Title;
