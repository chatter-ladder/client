import React, { Component } from 'react';

import classes from './Table.module.css';
import Cell from './Cell/Cell';

class Table extends Component {

  renderHeadingRow = (content) => {
    return (
      <Cell
        content={content}
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
        {this.props.headings.map(heading => this.renderHeadingRow(heading))}
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
