import React from 'react';

const list = {
  
}

class List extends React.Component {
  render() {
    return (
      <div style={ list }>
        {this.props.children}
      </div>
    );
  }
}

export default List;
