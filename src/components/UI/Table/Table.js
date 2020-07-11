import React, { Component } from 'react';

import Cell from './Cell/Cell';

class Table extends Component {

  renderHeadingRow = () => {
    return (
      <Cell
        content='word'
        header={true}
      />
    )
  }

  renderRow = () => {
    return (
      <Cell
        content='hello'
        header={false}
      />
    )
  }

  render () {
    return (<div>Table</div>);
  }
}

export default Table;
