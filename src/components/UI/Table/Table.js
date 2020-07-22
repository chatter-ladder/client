import React, { Component } from 'react';

import classes from './Table.module.css';
import Cell from './Cell/Cell';

class Table extends Component {

  renderHeadingRow = (content) => {
    return (
      <Cell
        key={content}
        content={content}
        header={true}
      />
    )
  }

  renderBodyRow = (content) => {
    return (
      <Cell
        content={content}
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

    const bodyRows = (
      this.props.rows.map(row => {
        return (
          <tr>
            {row.map(content => this.renderBodyRow(content))}
          </tr>
        )
      })
    );

    return (
      <div className={classes.Container}>
        <table className={classes.Table}>
          <thead>{headingRows}</thead>
          <tbody>{bodyRows}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
