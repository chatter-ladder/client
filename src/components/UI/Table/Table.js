import React, { Component } from 'react';

import classes from './Table.module.css';
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
    const headingRows = (
      <tr>
        {this.props.headings.map(this.renderHeadingRow)}
      </tr>
    )
    return (
      <table>
        <thead>{headingRows}</thead>
        <tbody></tbody>
      </table>
    );
  }
}

export default Table;
