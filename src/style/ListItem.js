import React from 'react';

const listItem = {
  borderBottom: '1px solid #444',
  padding: "10px",
}

class ListItem extends React.Component {

  render() {
    return (
      <div style={ listItem }>
        {this.props.children}
      </div>
    );
  }
}

export default ListItem;
